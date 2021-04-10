import React from 'react'
import { useContext } from 'react'
import { StateStore } from '../Store'
import styled from 'styled-components'
import Hover from './hover'
import UnmuteButton from './buttons/UnmuteButton'
import MuteButton from './buttons/MuteButton'

const Mute = styled(({ className }) => {
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
      <MuteButton
        {...{ className, disabled: !ready, onClick: ready ? onClick : null }}
      />
    )
  } else {
    component = (
      <UnmuteButton
        {...{ className, disabled: !ready, onClick: ready ? onClick : null }}
      />
    )
  }

  return component
})`
  ${Hover}
`

export default Mute
