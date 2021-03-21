import React from 'react'
import styled from 'styled-components'
import Mute from './mute'
import Share from './share'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const ControlCollection = () => {
  return (
    <Container>
      <Mute />
      <Share />
    </Container>
  )
}

export default ControlCollection
