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

  const { paused, ready } = state

  const onClick = () => {
    dispatch({
      type: 'pauseClip',
    })
  }

  let component
  if (paused) {
    component = (
      <PlayButton
        {...{ className, disabled: !ready, onClick: ready ? onClick : null }}
      />
    )
  } else {
    component = (
      <PauseButton
        {...{ className, disabled: !ready, onClick: ready ? onClick : null }}
      />
    )
  }

  return component
})`
  ${Hover}
`

export default Play
