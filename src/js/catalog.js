import React, { useState, useEffect, useContext } from 'react'
import styled from 'styled-components'
import { useSpring, animated } from 'react-spring'
import { StateStore } from './Store'
import { htmlToText } from 'html-to-text'
import { PLAYERNAMES } from '../fixtures/Names'
import { COLORS, FONT_SIZES } from './theme'
import { fetchData, fetchStatsData } from './execute'

const AnimationFrame = styled(({ className, children }) => {
  const { state } = useContext(StateStore)

  if (!state) {
    return
  }

  const { closed } = state

  const [ready, setReady] = useState(false)

  const props = useSpring({
    opacity: !ready || closed ? 0.9 : 1.0,
    height: !ready || closed ? `0px` : `200px`,
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
`

const Catalog = () => {
  const [text, setText] = useState('')
  const { state, dispatch } = useContext(StateStore)

  const { container } = state

  const hidden = container !== 0

  useEffect(() => {
    if (document) {
      setText(htmlToText(document.querySelector('body').outerHTML))
    }
  }, [, document])

  const currentPlayers = Object.keys(PLAYERNAMES).filter((e) => {
    return text.includes(e)
  })

  if (currentPlayers.length === 0 || hidden) {
    return null
  }

  return (
    <StyledAnimationFrame>
      <List>
        {currentPlayers.map((e, i) => (
          <div
            key={i}
            onClick={async () => {
              dispatch({
                type: 'setContainer',
                container: 1,
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
      </List>
    </StyledAnimationFrame>
  )
}

export default Catalog
