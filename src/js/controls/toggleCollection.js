import React from 'react'
import styled from 'styled-components'
import { WIDTHS } from '../theme'
import NextButton from './nextButton'
import PrevButton from './prevButton'

const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  flex-grow: 1;
  padding: ${WIDTHS.small};
  padding: 10px 20px 11px 15px;
  justify-content: flex-end;

  > div:first-child {
    margin-right: 5px;
  }
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
