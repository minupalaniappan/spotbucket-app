import React from 'react'
import { useContext } from 'react'
import { StateStore } from '../Store'
import PlayButton from './buttons/PlayButton'
import PauseButton from './buttons/PauseButton'

const Play = () => {
  const { dispatch, state } = useContext(StateStore)

  if (!state) {
    return null
  }

  const { paused, ready } = state

  const onClick = () => {
    dispatch({
      type: 'pauseClip',
    })
  }

  let component
  if (paused) {
    component = (
      <PlayButton {...{ disabled: !ready, onClick: ready ? onClick : null }} />
    )
  } else {
    component = (
      <PauseButton {...{ disabled: !ready, onClick: ready ? onClick : null }} />
    )
  }

  return component
}

export default Play
