import React from 'react'
import styled from 'styled-components'

const OpenLink = styled(({ className, onClick, disabled = false }) => {
  return <LinkButton {...{ className, onClick: disabled ? '' : onClick }} />
})`
  cursor: ${({ disabled }) => (disabled ? 'default' : 'pointer')};
`

export default OpenLink
