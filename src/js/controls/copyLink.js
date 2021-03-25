import React from 'react'
import { useContext } from 'react'
import styled from 'styled-components'
import { StateStore } from '../Store'
import CopyButton from './CopyButton'

const CopyLink = styled(({ className, disabled = false }) => {
  const { dispatch } = useContext(StateStore)

  const onClick = () => {
    dispatch({
      type: 'shareClip',
    })
  }

  return <CopyButton {...{ className, onClick: disabled ? null : onClick }} />
})`
  cursor: ${({ disabled }) => (disabled ? 'default' : 'pointer')};
  position: relative;
  bottom: 2px;
`

export default CopyLink
