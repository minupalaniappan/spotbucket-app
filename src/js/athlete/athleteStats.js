import React, { useEffect } from 'react'
import { useContext } from 'react'
import styled, { css } from 'styled-components'
import { StateStore } from '../Store'
import { COLORS, FONT_SIZES } from '../theme'

const BaseFontStyle = css`
  font-weight: 700;
  text-transform: uppercase;
  text-align: center;
`

const StatHeader = styled.div`
  ${BaseFontStyle}

  color: ${COLORS.black};
  font-size: ${FONT_SIZES.small};
`

const StatValue = styled.div`
  ${BaseFontStyle}

  color: ${COLORS.beige};
  font-size: ${FONT_SIZES.small};
  font-weight: 400;
`

const Container = styled.div`
  border: 2px solid ${COLORS.beige};
  display: flex;

  flex-direction: column;
`

const Row = styled.div`
  flex-direction: row;
  align-items: center;
  height: fit-content;
  display: flex;
`

const Cell = styled.div`
  align-items: center;
  display: inline-flex;
  flex-grow: 1;
  justify-content: center;

  max-width: calc(100% / 11);
`

const HeaderCell = styled(Cell)`
  background: ${COLORS.beige};
`

const STATS = [
  'PPG',
  'APG',
  'RPG',
  'SPG',
  'BPG',
  '3PM',
  'FG%',
  'FT%',
  '3PT%',
  'TO',
  'MP',
]
const STATS_MAP = {
  PPG: 'PTS',
  APG: 'AST',
  RPG: 'REB',
  SPG: 'STL',
  BPG: 'BLK',
  '3PM': 'FG3M',
  'FG%': 'FG_PCT',
  'FT%': 'FT_PCT',
  '3PT%': 'FG3_PCT',
  TO: 'TOV',
  MP: 'MIN',
}

const round = (key, val) => {
  if (['FG%', 'FT%', '3PT%'].includes(key)) {
    return Math.round(val * 100)
  }

  return val
}

const AthleteStats = () => {
  const { state } = useContext(StateStore)

  if (!state || !state.player) {
    return null
  }

  const {
    player: { stats },
  } = state

  return (
    <Container>
      <Row>
        {STATS.map((s) => (
          <HeaderCell key={s}>
            <StatHeader key={s}>{s}</StatHeader>
          </HeaderCell>
        ))}
      </Row>
      <Row>
        {STATS.map((s, i) => (
          <Cell key={`${s}_${i}`}>
            <StatValue>{round(s, stats[STATS_MAP[s]]) || 0.0}</StatValue>
          </Cell>
        ))}
      </Row>
    </Container>
  )
}

export default AthleteStats
