import React from 'react'
import { useContext, useEffect } from 'react'
import styled from 'styled-components'
import { StateStore } from '../Store'
import { COLORS, FONT_SIZES } from '../theme'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 12px;
`

const PlayerName = styled.div`
  text-transform: uppercase;
  font-size: ${FONT_SIZES.large};
  color: ${COLORS.white};
  font-weight: 700;
  line-height: 24px;
`

const PlayerDescription = styled.div`
  text-transform: uppercase;
  color: ${COLORS.grey};
  font-weight: 400;
  font-size: ${FONT_SIZES.medium};
`

const AthleteDescription = () => {
  const { state } = useContext(StateStore)

  if (!state || !state.player) {
    return null
  }

  const {
    player: { playerName, playerNumber, playerPosition, playerTeam },
  } = state

  return (
    <Container>
      <PlayerName>{playerName}</PlayerName>
      <PlayerDescription>
        #{playerNumber} {playerPosition} for the {playerTeam}
      </PlayerDescription>
    </Container>
  )
}

export default AthleteDescription
