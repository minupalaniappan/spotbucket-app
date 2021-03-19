import React from 'react'
import styled from 'styled-components'
import { SPACING } from '../theme'
import NextButton from './nextButton'
import PrevButton from './prevButton'

const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: ${SPACING.small};
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
