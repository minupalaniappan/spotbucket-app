import React from 'react'
import styled from 'styled-components'

const TEAL = '#12FFD4'

const StyledDiv = styled.div`
  @font-face {
    font-family: Mono;
    src: url('../fonts/Regular.ttf');
    font-weight: 400;
  }

  @font-face {
    font-family: Mono;
    src: url('../fonts/Italic.ttf');
    font-style: italic;
  }

  @font-face {
    font-family: Mono;
    src: url('../fonts/BoldItalic.ttf');
    font-weight: 700;
    font-style: italic;
  }

  @font-face {
    font-family: Mono;
    src: url('../fonts/Bold.ttf');
    font-weight: 700;
  }

  * {
    font-family: Mono !important;
  }
`

const BackFrame = styled.div`
  background-color: black !important;
  position: absolute !important;
  z-index: 99999999 !important;
  top: 10px !important;
  right: 10px !important;
  display: flex;
  flex-direction: column;
  width: 600px;
  height: 400px;
`

const NavContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
  padding: 10px 0;
`

const ProfileContainer = styled.div``

const BioContainer = styled.div``

const StatsContainer = styled.div``

const StatsElement = styled.div``

const CloseButton = styled.div`
  background-color: ${TEAL};
  color: black;
  font-size: 15px;
  text-align: center;
  padding: 5px 20px;
  text-transform: uppercase;
  cursor: default;
  margin-right: 10px;
  font-family: 'Mono';
`

const Frame = (data) => {
  return (
    <StyledDiv>
      <BackFrame>
        <NavContainer>
          <CloseButton>Close</CloseButton>
        </NavContainer>
      </BackFrame>
    </StyledDiv>
  )
}

export default Frame
