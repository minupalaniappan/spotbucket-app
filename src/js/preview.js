import React, { useState, useEffect, useContext } from 'react'
import styled from 'styled-components'
import { useSpring, animated } from 'react-spring'
import { StateStore } from './Store'
import { htmlToText } from 'html-to-text'
import { PLAYERNAMES } from '../fixtures/Names'
import { COLORS, FONT_SIZES } from './theme'
import { fetchData, fetchStatsData } from './execute'
import BackwardArrowButton from './controls/buttons/BackwardArrowButton'
import useInterval from 'use-interval'
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

  if (!currentPlayers || currentPlayers.length === 0) {
    return null
  }

  return (
    <PlayerProvider>
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
    </PlayerProvider>
  )
}

export default Preview
