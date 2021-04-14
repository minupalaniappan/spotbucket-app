import React from 'react'
import { useContext } from 'react'
import { StateStore } from '../Store'
import UnmuteButton from './buttons/UnmuteButton'
import MuteButton from './buttons/MuteButton'

const Mute = () => {
  const { dispatch, state } = useContext(StateStore)

  if (!state) {
    return null
  }

  const { muted, ready } = state

  const onClick = async () => {
    dispatch({
      type: 'muteClip',
    })
  }

  let component
  if (muted) {
    component = (
      <MuteButton {...{ disabled: !ready, onClick: ready ? onClick : null }} />
    )
  } else {
    component = (
      <UnmuteButton
        {...{ disabled: !ready, onClick: ready ? onClick : null }}
      />
    )
  }

  return component
}

export default Mute
