import React from 'react'
import { useContext } from 'react'
import styled from 'styled-components'
import { StateStore } from '../Provider'

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

const AthletePicture = () => {
  const {
    state: {
      player: { playerImage, playerTeamImage },
    },
  } = useContext(StateStore)

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
