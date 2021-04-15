import React, { useState, useEffect, useContext } from 'react'
import styled from 'styled-components'
import { useSpring, animated } from 'react-spring'
import { StateStore } from './Store'
import { COLORS, FONT_SIZES } from './theme'
import { fetchData, fetchStatsData } from './execute'
import BackwardArrowButton from './controls/buttons/BackwardArrowButton'
import PlayerProvider from './playerProvider'

const AnimationFrame = styled(({ className, children, height = 200 }) => {
  const { state } = useContext(StateStore)

  if (!state) {
    return
  }

  const { closed } = state

  const [ready, setReady] = useState(false)

  const props = useSpring({
    opacity: !ready || closed ? 0.9 : 1.0,
    height: !ready || closed ? `0px` : `${height}px`,
    config: {
      duration: 400,
    },
  })

  useEffect(() => {
    setReady(true)
  }, [])

  return (
    <animated.div {...{ className, style: props }}>{children}</animated.div>
  )
})`
  position: fixed !important;
`

export const StyledAnimationFrame = styled(AnimationFrame)`
  background-color: black !important;
  z-index: 99999999 !important;
  display: flex;
  bottom: 30px !important;
  border-radius: 5px;
  flex-direction: column;
  width: 600px;
  position: fixed !important;
  right: 30px !important;
  overflow-y: scroll;

  &::-webkit-scrollbar {
    display: none;
  }
`

const List = styled.div`
  display: flex;
  flex-direction: column;

  > div:first-child {
    display: flex;
    position: fixed;
    padding: 20px;
    background: black;
    z-index: 2;
    flex-direction: row;
    width: 560px;
    border-bottom: 1px solid ${COLORS.dusk};
  }

  > div:last-child {
    padding-top: 57px;

    > div {
      padding: 20px;
      border-bottom: 1px solid ${COLORS.dusk};
      color: ${COLORS.grey};
      font-size: ${FONT_SIZES.small};
      cursor: pointer;

      &:hover {
        background: ${COLORS.graphite};
      }
    }

    > div:last-child {
      border-bottom: none;
    }
  }
`

const Catalog = () => {
  const { state, dispatch } = useContext(StateStore)

  const { foundPlayers: currentPlayers } = state

  return (
    <PlayerProvider>
      <StyledAnimationFrame>
        <List>
          <div>
            <BackwardArrowButton
              onClick={() =>
                dispatch({
                  type: 'setContainer',
                  container: 0,
                })
              }
            />
          </div>
          <div>
            {currentPlayers.map((e, i) => (
              <div
                key={i}
                onClick={async () => {
                  dispatch({
                    type: 'setContainer',
                    container: 2,
                  })

                  dispatch({
                    type: 'setToSpotBucket',
                    toSpotBucket: true,
                  })

                  const [player, stats] = await Promise.all([
                    fetchData(e),
                    fetchStatsData(e),
                  ])

                  dispatch({
                    type: 'mountData',
                    stats: stats.stats,
                    ...player,
                  })
                }}
              >
                {e}
              </div>
            ))}
          </div>
        </List>
      </StyledAnimationFrame>
    </PlayerProvider>
  )
}

export default Catalog
