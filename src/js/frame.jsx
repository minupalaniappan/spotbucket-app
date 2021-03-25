import React, { useState, useEffect, useReducer, createContext } from 'react'
import styled from 'styled-components'
import Clip from './content/clip'
import { useSpring, animated } from 'react-spring'
import { COLORS, FontProvider } from './theme'
import { DataProvider } from './Provider'
import { StateStore } from './Store'
import Mount from './mount'
import Dashboard from './content/dashboard'

const AnimationFrame = styled(({ className, children }) => {
  const [isReady, setIsReady] = useState(false)

  useEffect(() => {
    setIsReady(true)
  }, [])

  const props = useSpring({
    opacity: !isReady ? `1.0` : `1.0`,
    height: !isReady ? `0px` : `530px`,
  })

  return (
    <animated.div {...{ className, style: props }}>{children}</animated.div>
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
  box-shadow: 10px 10px 10px ${COLORS.grey};
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
          </StyledAnimationFrame>
        </FontProvider>
      </Mount>
    </DataProvider>
  )
}

export { Frame, AnimationFrame }
