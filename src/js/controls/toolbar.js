import React from 'react'
import Close from './close'
import OpenLink from './openLink'
import styled from 'styled-components'
import { WIDTHS } from '../theme'

const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
  gap: ${WIDTHS.small};
  padding: ${WIDTHS.small};
`

const Toolbar = () => {
  return (
    <Container>
      <OpenLink />
      <Close />
    </Container>
  )
}

export default Toolbar
