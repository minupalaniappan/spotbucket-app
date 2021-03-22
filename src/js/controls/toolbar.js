import React from 'react'
import Close from './close'
import OpenLink from './openLink'
import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 10px;
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
