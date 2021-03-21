import React from 'react'
import { useContext } from 'react'
import styled from 'styled-components'
import { StateStore } from '../Store'
import { COLORS } from '../theme'

const ProgressElement = styled.div`
  width: 100%;
  background: ${COLORS.brown};
  position: relative;

  > div {
    position: absolute;
    background: ${COLORS.red};
    z-index: 1;
    left: 0;
    top: 0;
    width: ${(clipCurrent / clipTotal) * 100}%;
  }
`

const Progress = () => {
  const { state } = useContext(StateStore)
  return <ProgressElement {...state} />
}

export default Progress
