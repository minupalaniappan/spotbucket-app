import { createContext } from 'react'

export const initialState = {
  clipCurrent: 0,
  clipTotal: 0,
  currentClip: 4,
  muted: true,
  clipClosed: false,
  page: 0,
  playerName: '',
  plays: [],
  ready: false,
  prevDisabled: true,
  nextDisabled: true,
  muteDisabled: true,
  shareDisabled: true,
  totalPages: 0,
  params: {},
  hasNextPage: false,
  totalPlays: 0,
}

export const StateStore = createContext(initialState)
