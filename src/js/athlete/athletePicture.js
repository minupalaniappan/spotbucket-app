import React from 'react'
import { useContext } from 'react'
import styled from 'styled-components'
import { StateStore } from '../Store'

const PlayerPicture = styled.div`
  display: flex;
  > div {
    position: relative;

    img {
      position: absolute;
    }

    > img:first-child {
      z-index: 2;
    }

    > img:last-child {
      width: 100px;
      z-index: 1;
      filter: blur(1px);
    }
  }
`

const AthletePicture = () => {
  const { state } = useContext(StateStore)

  if (!state || !state.player) {
    return null
  }

  const {
    player: { playerImage, playerTeamImage },
  } = state

  return (
    <PlayerPicture>
      <div>
        <img src={playerImage} />
        <img src={playerTeamImage} />
      </div>
    </PlayerPicture>
  )
}

export default AthletePicture
