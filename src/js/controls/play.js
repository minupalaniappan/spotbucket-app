import React from 'react'
import { useContext } from 'react'
import { StateStore } from '../Store'
import Hover from './hover'
import PlayButton from './buttons/PlayButton'
import PauseButton from './buttons/PauseButton'
import styled from 'styled-components'

const Play = styled(({ className }) => {
  const { dispatch, state } = useContext(StateStore)

  if (!state) {
    return null
  }

  const { paused } = state

  const onClick = () => {
    dispatch({
      type: 'pauseClip',
    })
  }

  let component
  if (paused) {
    component = <PlayButton {...{ className, disabled: false, onClick }} />
  } else {
    component = <PauseButton {...{ className, disabled: false, onClick }} />
  }

  return component
})`
  ${Hover}
`

export default Play
