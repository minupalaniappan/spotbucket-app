import React from 'react'
import { useContext } from 'react'
import styled from 'styled-components'
import { StateStore } from '../Store'
import { WIDTHS } from '../theme'

const PlayerPicture = styled.div`
  display: flex;
  position: relative;
  top: 10px;

  > div {
    position: relative;
    width: 150px;
    height: 110px;

    img {
      position: absolute;
    }

    > img:first-child {
      z-index: 2;
      width: 150px;
    }

    > img:last-child {
      top: ${WIDTHS.small};
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
