import React from 'react'
import ToggleButton from './toggleButton'
import { useContext } from 'react'
import { StateStore } from '../Store'

const PrevButton = () => {
  const {
    dispatch,
    state: { prevDisabled },
  } = useContext(StateStore)

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
