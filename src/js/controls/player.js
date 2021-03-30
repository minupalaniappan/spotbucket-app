import React, { useContext } from 'react'
import styled from 'styled-components'
import { COLORS, WIDTHS } from '../theme'
import Mute from './mute'
import Next from './next'
import Play from './play'
import Previous from './previous'

const PositionedContainer = styled.div`
  position: absolute;
  z-index: 2;
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  bottom: 20px;
`

const PlayerContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  background: ${COLORS.black};
  padding: 0px ${WIDTHS.small};
  border-radius: 20px;

  > div {
    align-items: center;
    display: flex;
    flex-direction: row;
    padding: 5px 0;
  }

  > div:first-child {
    gap: 5px;
    padding-right: 10px;
    margin-right: 10px;
    border-right: 1px solid ${COLORS.dusk};
  }
`

const Player = () => {
  return (
    <PositionedContainer>
      <PlayerContainer>
        <div>
          <Previous />
          <Play />
          <Next />
        </div>
        <div>
          <Mute />
        </div>
      </PlayerContainer>
    </PositionedContainer>
  )
}

export default Player
