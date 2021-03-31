import React, { useContext } from 'react'
import styled from 'styled-components'
import { COLORS, WIDTHS } from '../theme'
import Mute from './mute'
import Next from './next'
import Play from './play'
import Previous from './previous'

const PlayerContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  position: relative;
  bottom: 13px;

  > div {
    flex-grow: 1;
  }

  > div:nth-child(2) {
    gap: 15px;
    justify-content: center;
  }

  > div:last-child {
    justify-content: flex-end;

    > svg {
      position: relative;
      right: 20px;
    }
  }

  > div {
    align-items: center;
    display: flex;
    flex-direction: row;
    padding: 5px 0;
  }

  > div:first-child {
    padding-right: 10px;
    margin-right: 10px;
  }
`

const Player = () => {
  return (
    <PlayerContainer>
      <div />
      <div>
        <Previous />
        <Play />
        <Next />
      </div>
      <div>
        <Mute />
      </div>
    </PlayerContainer>
  )
}

export default Player
