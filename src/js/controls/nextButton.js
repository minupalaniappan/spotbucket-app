import React from 'react'
import ToggleButton from './toggleButton'
import { useContext } from 'react'
import { StateStore } from '../Provider'

const NextButton = () => {
  const {
    dispatch,
    state: { nextDisabled, currentClip, plays },
  } = useContext(StateStore)

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
