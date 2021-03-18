import fetch from 'node-fetch'
import React, { useReducer, createContext } from 'react'

const initialState = {
  clipCurrent: 0,
  clipTotal: 0,
  currentClip: 0,
  muted: false,
  clipClosed: false,
  page: 0,
  playerName: '',
  plays: [],
  ready: false,
}

const HOST = 'http://localhost:5000'

export const StateStore = createContext(initialState)

export const DataProvider = ({ children, Provider }) => {
  const [state, dispatch] = useReducer(async (state, action) => {
    switch (action.type) {
      case 'updateClipProgress':
        return Object.assign({}, state, {
          clipCurrent: action.clipCurrent,
        })
      case 'updateClipTotal':
        return Object.assign({}, state, {
          clipTotal: action.clipTotal,
        })
      case 'nextClip':
        return Object.assign({}, state, {
          currentClip: currentClip + 1,
        })
      case 'prevClip':
        return Object.assign({}, state, {
          currentClip: currentClip - 1,
        })
      case 'muteClip':
        return Object.assign({}, state, {
          muted: !state.muted,
        })
      case 'closeClip':
        return Object.assign({}, state, {
          clipClosed: !state.clipClosed,
        })
      case 'setPage':
        return Object.assign({}, state, {
          page: action.page,
        })
      case 'setPlayer':
        return Object.assign({}, state, {
          player: action.player,
        })
      case 'setError':
        return Object.assign({}, state, {
          error: action.error,
        })
      case 'setReady':
        return Object.assign({}, state, {
          ready: action.ready,
        })
      case 'setPlays':
        return Object.assign({}, state, {
          plays: action.plays,
        })
      case 'fetchPlays':
        const plays = await fetch(
          `${HOST}?${new URLSearchParams({
            name: state.playerName,
            page: state.page,
          })}`
        )
          .then((e) => e.json())
          .then(({ plays }) =>
            plays.filter(({ videoUrl: { videoUrl } }) => videoUrl.length > 0)
          )

        return Object.assign({}, state, {
          plays,
        })
      default:
        return state
    }
  }, initialState)

  events.filter(({ videoUrl: { videoUrl } }) => videoUrl.length)

  return <Provider value={{ state, dispatch }}>{children}</Provider>
}
