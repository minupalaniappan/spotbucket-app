import React, { useEffect } from 'react'
import { useContext } from 'react'
import styled, { css } from 'styled-components'
import { StateStore } from '../Store'
import { COLORS, FONT_SIZES } from '../theme'

const BaseFontStyle = css`
  font-weight: bold;
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
`

const Container = styled.div`
  border: 2px solid ${COLORS.beige};
  display: flex;

  flex-direction: column;
`

const Row = styled.div`
  flex-direction: row;
  align-items: center;
`

const Cell = styled.div`
  width: 50px;
`

const HeaderCell = styled(Cell)`
  background: ${COLORS.beige};
`

const STATS = ['PPG', 'APG', 'RPG', 'SPG', 'BPG', '3PM', 'FG', 'FT']

const AthleteStats = () => {
  const { state } = useContext(StateStore)

  return null

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
            <StatValue>{stats[`player${s}`]}</StatValue>
          </Cell>
        ))}
      </Row>
    </Container>
  )
}

export default AthleteStats
