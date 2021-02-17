import React, { useState, useEffect } from 'react'
import ReactPlayer from 'react-player'
import fetch from 'node-fetch'
import { HOST } from './execute'
import styled from 'styled-components'
import { Spinner } from 'evergreen-ui'

const ReactPlayerFrame = styled.div`
  > div {
    position: absolute !important;
    bottom: -5px !important;
    width: auto !important;
    height: auto !important;
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
    bottom: 20px;

    circle {
      stroke: white !important;
    }
  }
`

const Clip = ({ plays: paramPlays, player_name: playerName }) => {
  const filterPlays = (events) =>
    events.filter(({ videoUrl: { videoUrl } }) => videoUrl.length)

  const [plays, setPlays] = useState(filterPlays(paramPlays))
  const [page, setPage] = useState(1)
  const [gameId, setGame] = useState(null)
  const [eventId, setEventId] = useState(null)
  const [videoUrl, setVideo] = useState(null)
  const [clip, setClip] = useState(0)
  const [isReady, setIsReady] = useState(true)

  const fetchNextPage = async () => {
    await fetch(`${HOST}?name=${playerName}&page=${page + 1}`)
      .then((e) => e.json())
      .then(({ plays: plays_ }) => setPlays(filterPlays(plays_)))
      .then(() => setPage(page + 1))
  }

  useEffect(async () => {
    if (clip >= plays.length) {
      await fetchNextPage()
      setClip(0)
    }

    const { eventId, gameId, videoUrl } = plays[clip].videoUrl

    setGame(gameId)
    setEventId(eventId)
    setVideo(videoUrl)
  }, [, clip])

  return (
    <>
      <ReactPlayerFrame>
        <ReactPlayer
          onEnded={() => {
            setClip(clip + 1)
            setIsReady(false)
          }}
          url={videoUrl}
          onStart={() => console.log('start')}
          onReady={(e) => setIsReady(true)}
          onError={(e) => console.error(e)}
          onProgress={(e) => {}}
          volume={1}
          muted
          playing
        />
      </ReactPlayerFrame>
      {!isReady ? (
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
