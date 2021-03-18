import React, { useState, useEffect, useContext } from 'react'
import ReactPlayer from 'react-player'
import styled from 'styled-components'
import { Spinner } from 'evergreen-ui'
import { SPACING } from '../theme'
import { StateStore } from '../Provider'

const ReactPlayerFrame = styled.div`
  > div {
    position: absolute !important;
    width: auto !important;
    margin-top: ${SPACING.small};

    video {
      position: relative;
      top: -12px;
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
    bottom: ${SPACING.medium};

    circle {
      stroke: white !important;
    }
  }
`

const Clip = () => {
  const [rendered, setRendered] = useState(false)
  useEffect(() => {
    setRendered(true)
  }, [])

  const {
    dispatch,
    state: { muted, ready, plays, currentClip },
  } = useContext(StateStore)

  return (
    <>
      <ReactPlayerFrame {...{ rendered }}>
        <ReactPlayer
          onEnded={() => {
            dispatch({
              type: 'nextClip',
            })
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
