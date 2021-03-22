import React from 'react'
import { useContext, useEffect } from 'react'
import styled from 'styled-components'
import { StateStore } from '../Store'
import { FONT_SIZES } from '../theme'

const Container = styled.div`
  display: flex;
  flex-direction: column;
`

const PlayerName = styled.div`
  text-transform: uppercase;
  font-size: ${FONT_SIZES.large};
`

const PlayerDescription = styled.div`
  text-transform: uppercase;
  font-weight: bold;
  font-size: ${FONT_SIZES.large};
`

const AthleteDescription = () => {
  const {
    state: { player },
  } = useContext(StateStore)

  if (!player) {
    return null
  }

  return null

  if (state === undefined) {
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
