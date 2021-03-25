import React from 'react'
import Close from './close'
import CopyLink from './copyLink'
import styled from 'styled-components'
import { WIDTHS } from '../theme'

const Container = styled.div`
  display: flex;
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
  return (
    <Container>
      <CopyLink />
      <Close />
    </Container>
  )
}

export default Toolbar
