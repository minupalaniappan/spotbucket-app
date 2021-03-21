import React from 'react'
import { useContext } from 'react'
import styled from 'styled-components'
import { StateStore } from '../Store'

const OpenLink = styled(({ className, disabled = false }) => {
  const { dispatch } = useContext(StateStore)

  const onClick = () => {
    dispatch({
      type: 'openLink',
    })
  }

  return <LinkButton {...{ className, onClick: disabled ? '' : onClick }} />
})`
  cursor: ${({ disabled }) => (disabled ? 'default' : 'pointer')};
`

export default OpenLink
