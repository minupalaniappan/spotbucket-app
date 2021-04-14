import React from 'react'
import Close from './close'
import CopyLink from './copyLink'
import styled from 'styled-components'
import { WIDTHS } from '../theme'
import { StateStore } from '../Store'
import { useContext } from 'react'

const Container = styled.div`
  display: ${({ closed }) => (closed ? 'none' : 'flex')};
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
  gap: 10px;
  padding: ${WIDTHS.small};

  > svg:last-child {
    position: relative;
    bottom: 3px;
  }
`

const Toolbar = () => {
  const { state } = useContext(StateStore)

  if (!state) {
    return
  }

  const { closed } = state
  return (
    <Container {...{ closed }}>
      <CopyLink />
      <Close />
    </Container>
  )
}

export default Toolbar
