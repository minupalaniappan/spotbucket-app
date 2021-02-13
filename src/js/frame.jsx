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

const PlayerPicture = styled.div``

const PlayerDescription = styled.div`
  display: flex;
  flex-direction: column;
  padding-bottom: 20px;
`

const AthleteContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  > ${BioContainer} {
    flex-grow: 1;
  }
`

const BioContainer = styled.div`
  display: flex;
  flex-direction: row;
`

const StatsContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 10px;
`

const StatsElement = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-end;
`

const CloseButton = styled.div`
  background-color: ${TEAL};
  color: black;
  font-size: 12px;
  text-align: center;
  padding: 5px 20px;
  text-transform: uppercase;
  cursor: default;
  margin-right: 10px;
  font-family: Mono;
`

const StatsNumerical = styled.div`
  color: ${TEAL};
  font-weight: 700;
  text-transform: uppercase;
  font-size: 16px;
`

const StatsType = styled.div`
  color: white;
  font-weight: 400;
  text-transform: uppercase;
  font-size: 12px;
`

const PlayerNameText = styled(StatsNumerical)``

const PlayerRoleText = styled(StatsType)`
  font-size: 14px;
`

const Navigation = () => (
  <NavContainer>
    <CloseButton>Close</CloseButton>
  </NavContainer>
)

const StatsBlock = ({ type, value }) => (
  <StatsElement>
    <StatsNumerical>{value}</StatsNumerical>
    <StatsType>{type}</StatsType>
  </StatsElement>
)

const StatsCollection = ({ stats }) => (
  <StatsContainer>
    {Object.keys(stats).map((type, i) => (
      <StatsBlock {...{ type, value: stats[type], key: i }} />
    ))}
  </StatsContainer>
)

const Frame = (data) => {
  return (
    <StyledDiv>
      <BackFrame>
        <Navigation />
      </BackFrame>
    </StyledDiv>
  )
}

export default Frame
