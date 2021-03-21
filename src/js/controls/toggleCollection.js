import React from 'react'
import styled from 'styled-components'
import NextButton from './nextButton'
import PrevButton from './prevButton'

const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`

const ToggleCollection = () => {
  return (
    <Container>
      <PrevButton />
      <NextButton />
    </Container>
  )
}

export default ToggleCollection
