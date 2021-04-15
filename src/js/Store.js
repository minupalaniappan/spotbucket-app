import { createContext } from 'react'

export const initialState = {
  clipCurrent: 0,
  clipTotal: 1,
  currentClip: 0,
  muted: true,
  paused: false,
  page: 0,
  player: {},
  plays: [],
  totalPages: 0,
  params: {},
  hasNextPage: false,
  totalPlays: 0,
  container: 0,
  closed: false,
  ready: false,
  error: '',
  prevDisabled: true,
  nextDisabled: true,
  muteDisabled: true,
  shareDisabled: true,
  toSpotBucket: false,
}

export const StateStore = createContext(initialState)
