import React from 'react'
import ToggleButton from './toggleButton'
import { useContext } from 'react'
import { StateStore } from '../Store'

const NextButton = () => {
  const { dispatch, state } = useContext(StateStore)

  if (!state) {
    return null
  }

  const { nextDisabled, currentClip, plays } = state

  let type
  if (currentClip + 1 === plays.length) {
    type = 'nextPage'
  } else {
    type = 'nextClip'
  }

  return (
    <ToggleButton
      {...{
        disabled: nextDisabled,
        toggleDirection: 'next',
        onClick: () => {
          dispatch({
            type,
          })
        },
      }}
    />
  )
}

export default NextButton
