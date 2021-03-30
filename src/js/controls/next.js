import React from 'react'
import { useContext } from 'react'
import { StateStore } from '../Store'
import ForwardButton from './buttons/ForwardButton'
import Hover from './hover'
import styled from 'styled-components'

const Next = styled(({ className }) => {
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
    <ForwardButton
      {...{
        className,
        disabled: nextDisabled,
        onClick: nextDisabled
          ? null
          : () => {
              dispatch({
                type,
              })
            },
      }}
    />
  )
})`
  ${Hover}
`

export default Next
