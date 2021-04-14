import React, { useState, useEffect, useContext } from 'react'
import styled from 'styled-components'
import Clip, { LoaderComponent } from './content/clip'
import { useSpring, animated } from 'react-spring'
import { StateStore } from './Store'
import Dashboard from './content/dashboard'
import Player from './controls/player'

const DisplayBlock = styled.div`
  display: ${({ ready }) => (ready ? 'block' : 'none')};
`

const AnimationFrame = styled(({ className, children }) => {
  const { state } = useContext(StateStore)

  if (!state) {
    return
  }

  const { closed } = state

  const [ready, setReady] = useState(false)

  useEffect(() => {
    setReady(true)
  }, [])

  const props = useSpring({
    opacity: !ready || closed ? 0.9 : 1.0,
    height: !ready || closed ? `0px` : `565px`,
    config: {
      duration: 400,
    },
  })

  return (
    <animated.div {...{ className, style: props }}>{children}</animated.div>
  )
})`
  position: fixed !important;
`

export const StyledAnimationFrame = styled(AnimationFrame)`
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

const SpotBucket = () => {
  const { state } = useContext(StateStore)

  if (!state) {
    return
  }

  const { container, ready, toSpotBucket, closed } = state

  if (container === 0) {
    return null
  }

  return (
    <StyledAnimationFrame>
      <DisplayBlock {...{ ready: (ready || !toSpotBucket) && !closed }}>
        <Dashboard />
        <Clip />
        <Player />
      </DisplayBlock>
      {!ready && toSpotBucket ? <LoaderComponent /> : ''}
    </StyledAnimationFrame>
  )
}

export default SpotBucket
