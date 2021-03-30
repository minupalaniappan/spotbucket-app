import React from 'react'
import { useContext } from 'react'
import styled from 'styled-components'
import { StateStore } from '../Store'
import { COLORS } from '../theme'
import { useSpring, animated } from 'react-spring'

const ProgressElement = styled.div`
  width: 100%;
  background: ${COLORS.brown};
  position: relative;
  height: 5px;
  margin-top: 5px;
`

const Progress = () => {
  const { state } = useContext(StateStore)

  let { clipCurrent = 0, clipTotal = 1 } = state

  const width = Math.round((clipCurrent / clipTotal) * 100) + 1

  const style = useSpring({
    width: `${width}%`,
    position: 'absolute',
    background: `${COLORS.red}`,
    zIndex: 1,
    left: 0,
    top: 0,
    height: '5px',
  })

  return (
    <ProgressElement>
      <animated.div {...{ style }} />
    </ProgressElement>
  )
}

export default Progress
