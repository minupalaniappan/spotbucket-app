import React, { useContext } from 'react'
import ReactPlayer from 'react-player'
import styled from 'styled-components'
import { Spinner } from 'evergreen-ui'
import { StateStore } from '../Store'
import { fetchNextPage } from '../execute'

const ReactPlayerFrame = styled.div`
  position: relative;
  height: 360px;

  ${({ ready }) => (!ready ? 'display: none;' : '')}

  > div:first-child {
    position: absolute !important;
    width: auto !important;
    top: -8px;

    video {
      position: relative;
    }
  }
`

const LoaderFrame = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  align-items: center;
  justify-content: center;
  height: 360px;

  > div {
    display: flex;
    position: relative;

    circle {
      stroke: white !important;
    }
  }
`

const Clip = () => {
  const {
    dispatch,
    state: {
      muted,
      ready,
      plays = [],
      currentClip,
      totalPages,
      page,
      player,
      paused,
    },
  } = useContext(StateStore)

  if (plays.length === 0 || !player) {
    return null
  }

  const { playerName } = player

  const endOfPage = currentClip + 1 === plays.length
  const endOfPages = page + 1 === totalPages

  return (
    <>
      <ReactPlayerFrame {...{ ready }}>
        <ReactPlayer
          onEnded={async () => {
            if (endOfPage) {
              if (endOfPages) {
              } else {
                const plays = await fetchNextPage({
                  playerName,
                  page: page + 1,
                })

                dispatch({
                  type: 'setPage',
                  page: page + 1,
                  ...plays,
                })
              }
            } else {
              dispatch({
                type: 'nextClip',
              })
            }

            dispatch({
              type: 'setReady',
              ready: false,
            })
            dispatch({
              type: 'updateClipProgress',
              clipCurrent: 0,
            })
            dispatch({
              type: 'updateClipTotal',
              clipTotal: 1,
            })
          }}
          url={plays[currentClip].videoUrl.videoUrl}
          onReady={(e) => {
            dispatch({
              type: 'setReady',
              ready: true,
            })
            dispatch({
              type: 'updateClipTotal',
              clipTotal: e.getDuration(),
            })
          }}
          onError={(e) => {
            dispatch({
              type: 'setErrpr',
              error: e,
            })
          }}
          onProgress={({ playedSeconds }) =>
            dispatch({
              type: 'updateClipProgress',
              clipCurrent: playedSeconds,
            })
          }
          {...{ muted, playing: !paused, volume: 1 }}
        />
      </ReactPlayerFrame>
      {!ready ? (
        <LoaderFrame>
          <Spinner size={24} />
        </LoaderFrame>
      ) : (
        ''
      )}
    </>
  )
}

export default Clip
