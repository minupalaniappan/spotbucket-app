import React from 'react'
import { useContext } from 'react'
import styled from 'styled-components'
import CloseButton from './CloseButton'
import { StateStore } from '../Store'
import Hover from './hover'

const Close = styled(({ className, disabled = false }) => {
  const { dispatch } = useContext(StateStore)

  const onClick = () => {
    dispatch({
      type: 'closeClip',
    })
  }

  return <CloseButton {...{ className, onClick: disabled ? null : onClick }} />
})`
  ${Hover}
`

export default Close
