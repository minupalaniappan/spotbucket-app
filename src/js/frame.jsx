import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import Clip from './clip'
import { useSpring, animated } from 'react-spring'

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

const NavContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
  padding: 10px 0;
`

const PlayerPicture = styled.div`
  display: flex;
  > div {
    position: relative;
    width: 150px;
    height: 110px;

    img {
      position: absolute;
    }

    > img:first-child {
      width: 150px;
      z-index: 2;
    }

    > img:last-child {
      width: 100px;
      z-index: 1;
      top: 15px;
      left: -5px;
      filter: blur(1px);
    }
  }
`

const PlayerDescription = styled.div`
  display: flex;
  flex-direction: column;
  padding-bottom: 20px;

  > *:first-child {
    padding-bottom: 5px;
  }
`

const BioContainer = styled.div`
  display: flex;
  flex-direction: column;
`

const AthleteContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 10px;
  padding-bottom: 0px;
  gap: 30px;
  z-index: 99;
  background: black;

  > ${BioContainer} {
    flex-grow: 1;
  }
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

const StatsNumerical = styled.div`
  color: ${TEAL};
  font-weight: 700;
  text-transform: uppercase;
  font-size: 16px;
  line-height: 16px;
`

const StatsType = styled.div`
  color: white;
  font-weight: 400;
  text-transform: uppercase;
  font-size: 12px;
  line-height: 12px;
`

const PlayerNameText = styled(StatsNumerical)``

const PlayerRoleText = styled(StatsType)`
  font-size: 14px;
`

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

const AtheleteImage = ({ profile_image, team_image }) => (
  <PlayerPicture>
    <div>
      <img src={profile_image} />
      <img src={team_image} />
    </div>
  </PlayerPicture>
)

const AthleteDetails = ({ player_name, position, team, stats }) => (
  <BioContainer>
    <PlayerDescription>
      <PlayerNameText>{player_name}</PlayerNameText>
      <PlayerRoleText>
        {position} for the {team}
      </PlayerRoleText>
    </PlayerDescription>
    <StatsCollection {...{ stats }} />
  </BioContainer>
)

const Athlete = (data) => (
  <AthleteContainer>
    <AtheleteImage {...data} />
    <AthleteDetails {...data} />
  </AthleteContainer>
)

const AnimationFrame = styled(({ className, children }) => {
  const [isReady, setIsReady] = useState(false)

  useEffect(() => {
    setIsReady(true)
  }, [])

  const props = useSpring({
    opacity: !isReady ? `0.9` : `1.0`,
    height: !isReady ? `0px` : `500px`,
  })

  return (
    <animated.div {...{ className, style: props }}>{children}</animated.div>
  )
})`
  bottom: 0px;
  position: fixed !important;
  right: 10px !important;
`

const StyledAnimationFrame = styled(AnimationFrame)`
  background-color: black !important;
  z-index: 99999999 !important;
  display: flex;
  bottom: 0px;
  flex-direction: column;
  width: 600px;
  position: fixed !important;
  right: 10px !important;
`

const Frame = (data) => {
  return (
    <StyledDiv>
      <StyledAnimationFrame>
        <Athlete {...data} />
        <Clip {...data} />
      </StyledAnimationFrame>
    </StyledDiv>
  )
}

export { Frame, AnimationFrame }
