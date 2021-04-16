import React, { useState, useEffect, useContext } from 'react'
import styled from 'styled-components'
import { useSpring, animated } from 'react-spring'
import { StateStore } from './Store'
import { COLORS, FONT_SIZES } from './theme'
import { StyledAnimationFrame } from './catalog'
import PlayerProvider from './playerProvider'

const PreviewContainer = styled.div`
  cursor: pointer;
  height: auto;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  padding: 20px;
  color: ${COLORS.grey};
  font-size: ${FONT_SIZES.small};

  &:hover {
    background: ${COLORS.graphite};
  }
`

const Preview = () => {
  const { state, dispatch } = useContext(StateStore)

  const { foundPlayers: currentPlayers } = state

  let component

  if (!currentPlayers || currentPlayers.length === 0) {
    component = <div></div>
  } else {
    component = (
      <StyledAnimationFrame height={55}>
        <PreviewContainer
          onClick={() =>
            dispatch({
              type: 'setContainer',
              container: 1,
            })
          }
        >
          View {currentPlayers.length} players found
        </PreviewContainer>
      </StyledAnimationFrame>
    )
  }

  return <PlayerProvider>{component}</PlayerProvider>
}

export default Preview
