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

  const { muted } = state

  const onClick = () => {
    dispatch({
      type: 'muteClip',
    })
  }

  let component
  if (muted) {
    component = <MuteButton {...{ className, disabled: false, onClick }} />
  } else {
    component = <UnmuteButton {...{ className, disabled: false, onClick }} />
  }

  return component
})`
  ${Hover}
`

export default Mute
