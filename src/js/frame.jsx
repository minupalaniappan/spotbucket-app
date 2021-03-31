import React, {
  useState,
  useEffect,
  useReducer,
  createContext,
  useContext,
} from 'react'
import styled from 'styled-components'
import Clip from './content/clip'
import { useSpring, animated } from 'react-spring'
import { COLORS, FontProvider } from './theme'
import { DataProvider } from './Provider'
import { StateStore } from './Store'
import Mount from './mount'
import Dashboard from './content/dashboard'
import Player from './controls/player'

const DisplayNone = styled.div`
  ${({ isEnded }) => (isEnded ? `display: none;` : '')};
`

const AnimationFrame = styled(({ className, children }) => {
  const [isReady, setIsReady] = useState(false)
  const [isEnded, setIsEnded] = useState(false)

  const { state } = useContext(StateStore)

  if (!state) {
    return
  }

  const { clipClosed = true } = state

  useEffect(() => {
    setIsReady(true)
  }, [])

  const props = useSpring({
    opacity: !isReady || clipClosed ? 0.9 : 1.0,
    height: !isReady || clipClosed ? `0px` : `565px`,
  })

  useEffect(() => {
    if (isReady && clipClosed) {
      setIsEnded(true)
    }
  }, [clipClosed])

  return (
    <animated.div {...{ className, style: props }}>
      <DisplayNone {...{ isEnded }}>{children}</DisplayNone>
    </animated.div>
  )
})`
  position: fixed !important;
`

const StyledAnimationFrame = styled(AnimationFrame)`
  background-color: black !important;
  z-index: 99999999 !important;
  display: flex;
  bottom: 30px !important;
  border-radius: 5px;
  flex-direction: column;
  width: 600px;
  position: fixed !important;
  right: 30px !important;
`

const Frame = (data) => {
  const { Provider } = StateStore

  return (
    <DataProvider {...{ Provider }}>
      <Mount {...{ data }}>
        <FontProvider>
          <StyledAnimationFrame>
            <Dashboard />
            <Clip />
            <Player />
          </StyledAnimationFrame>
        </FontProvider>
      </Mount>
    </DataProvider>
  )
}

export { Frame, AnimationFrame }
