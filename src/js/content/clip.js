import React, { useState, useEffect, useContext } from 'react'
import ReactPlayer from 'react-player'
import styled from 'styled-components'
import { Spinner } from 'evergreen-ui'
import { StateStore } from '../Store'
import { fetchNextPage } from '../execute'

const ReactPlayerFrame = styled.div`
  > div {
    position: absolute !important;
    width: auto !important;

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
      playerName,
    },
  } = useContext(StateStore)

  if (plays.length === 0) {
    return null
  }

  const endOfPage = currentClip + 1 === plays.length
  const endOfPages = page + 1 === totalPages

  return (
    <>
      <ReactPlayerFrame>
        <ReactPlayer
          onEnded={async () => {
            if (endOfPage) {
              if (endOfPages) {
                const plays = await fetchNextPage({ playerName, page: 0 })

                dispatch({
                  type: 'setPage',
                  page: 0,
                  ...plays,
                })
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
              clipTotal: 0,
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
          {...{ muted, playing: true, volume: 1 }}
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
