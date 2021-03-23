import React from 'react'
import ToggleButton from './toggleButton'
import { useContext } from 'react'
import { StateStore } from '../Store'

const PrevButton = () => {
  const { dispatch, state } = useContext(StateStore)

  if (!state) {
    return null
  }

  const { prevDisabled } = state

  return (
    <ToggleButton
      {...{
        disabled: prevDisabled,
        toggleDirection: 'prev',
        onClick: () => {
          dispatch({
            type: 'prevClip',
          })
        },
      }}
    />
  )
}

export default PrevButton
