import React from 'react'
import { useContext } from 'react'
import styled from 'styled-components'
import { StateStore } from '../Provider'
import { FONT_SIZES, SPACING } from '../theme'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${SPACING.small};
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
    state: {
      player: { playerName, playerNumber, playerPosition, playerTeam },
    },
  } = useContext(StateStore)

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
