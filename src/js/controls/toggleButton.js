import React from 'react'
import styled from 'styled-components'
import { COLORS } from '../theme'

const Text = styled.div`
  text-transform: uppercase;
  color: ${COLORS.black};
  font-weight: 400;
  font-size: 12px;
`

const ToggleContainer = styled.div`
  background: ${({ disabled }) => (disabled ? COLORS.grey : COLORS.beige)};
  color: ${COLORS.black};
  text-align: center;
  cursor: ${({ disabled }) => (disabled ? 'default' : 'pointer')};
  opacity: ${({ disabled }) => (disabled ? 0.9 : 1.0)};
`

const ToggleButton = ({ onClick, disabled = false, toggleDirection }) => {
  return (
    <ToggleContainer {...{ disabled, onClick: disabled ? null : onClick }}>
      <Text>{toggleDirection}</Text>
    </ToggleContainer>
  )
}

export default ToggleButton
