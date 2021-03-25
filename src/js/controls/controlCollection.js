import React from 'react'
import styled from 'styled-components'
import Mute from './mute'
import Share from './share'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-left: 5px;

  > div:first-child {
    margin-bottom: 5px;
  }

  > div {
    width: 100%;
    min-width: 75px;
  }
`

const ControlCollection = () => {
  return (
    <Container>
      <Mute />
    </Container>
  )
}

export default ControlCollection
