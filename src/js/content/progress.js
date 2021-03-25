import React from 'react'
import { useContext } from 'react'
import styled from 'styled-components'
import { StateStore } from '../Store'
import { COLORS } from '../theme'

const ProgressElement = styled.div`
  width: 100%;
  background: ${COLORS.brown};
  position: relative;
  height: 5px;
  margin-top: 5px;

  > div {
    position: absolute;
    background: ${COLORS.red};
    z-index: 1;
    left: 0;
    top: 0;
    ${({ clipCurrent = 0, clipTotal = 100 }) =>
      `width: ${(clipCurrent / clipTotal) * 100}%;`}
    height: 10px;
  }
`

const Progress = () => {
  const { state } = useContext(StateStore)
  return <ProgressElement {...state} />
}

export default Progress
