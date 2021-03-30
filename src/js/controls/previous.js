import React from 'react'
import { useContext } from 'react'
import { StateStore } from '../Store'
import BackwardButton from './buttons/BackwardButton'
import Hover from './hover'
import styled from 'styled-components'

const Previous = styled(({ className }) => {
  const { dispatch, state } = useContext(StateStore)

  if (!state) {
    return null
  }

  const { prevDisabled } = state

  return (
    <BackwardButton
      {...{
        className,
        disabled: prevDisabled,
        onClick: prevDisabled
          ? null
          : () => {
              dispatch({
                type: 'prevClip',
              })
            },
      }}
    />
  )
})`
  ${Hover}
`

export default Previous
