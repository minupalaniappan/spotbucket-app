import React, { useReducer } from 'react'
import copy from 'copy-to-clipboard'
import { initialState } from './Store'

export const DataProvider = ({ children, Provider }) => {
  const [state, dispatch] = useReducer((prevState, action) => {
    const {
      currentClip: _currentClip,
      muted: _muted,
      clipClosed: _clipClosed,
      totalPages: _totalPages,
      page: _page,
      plays: _plays,
    } = prevState

    switch (action.type) {
      case 'updateClipProgress':
        return Object.assign({}, prevState, {
          clipCurrent: action.clipCurrent,
        })
      case 'updateClipTotal':
        return Object.assign({}, prevState, {
          clipTotal: action.clipTotal,
        })
      case 'setPage':
        return Object.assign({}, prevState, {
          page: action.page,
          currentClip: 0,
          plays: action.plays,
          hasNextPage: action.hasNextPage,
        })
      case 'nextClip':
        return Object.assign({}, prevState, {
          currentClip: _currentClip + 1,
        })
      case 'prevClip':
        return Object.assign({}, prevState, {
          currentClip: _currentClip - 1,
        })
      case 'muteClip':
        return Object.assign({}, prevState, {
          muted: !_muted,
        })
      case 'closeClip':
        return Object.assign({}, prevState, {
          clipClosed: !_clipClosed,
        })
      case 'setError':
        return Object.assign({}, prevState, {
          error: action.error,
        })
      case 'setReady':
        return Object.assign({}, prevState, {
          ready: action.ready,
          prevDisabled: !action.ready || _currentClip === 0,
          nextDisabled: !action.ready,
          muteDisabled: !action.ready,
          shareDisabled: !action.ready,
        })
      case 'setPlays':
        return Object.assign({}, prevState, {
          plays: action.plays,
        })
      case 'nextPage':
        prevState = Object.assign({}, prevState, {
          prevDisabled: true,
          nextDisabled: true,
          muteDisabled: true,
          shareDisabled: true,
        })

        let nextPageNumber
        if (page + 1 > _totalPages) {
          nextPageNumber = 0
        } else {
          nextPageNumber = _page + 1
        }

        return Object.assign({}, prevState, {
          page: nextPageNumber,
        })
      case 'shareClip':
        copy(_plays[_currentClip].videoUrl.videoUrl)

        return
      case 'openLink':
        window.open(_plays[_currentClip].videoUrl.videoUrl, '_blank')

        return
      case 'mountData':
        return Object.assign({}, prevState, {
          hasNextPage: action.hasNextPage,
          totalPages: action.totalPages,
          params: action.params,
          totalPlays: action.totalPlays,
          player: {
            nbaProfile: action.nba_profile,
            twitterProfile: action.twitter_profile,
            playerNumber: action.player_number,
            playerPosition: action.position,
            playerImage: action.profile_image,
            playerTeamImage: action.team_image,
            playerName: action.player_name,
            playerTeam: action.team,
            stats: action.stats,
          },
          plays: action.plays.filter(
            ({ videoUrl: { videoUrl } }) => videoUrl.length > 0
          ),
        })
      default:
        return prevState
    }
  }, initialState)

  return <Provider value={{ state, dispatch }}>{children}</Provider>
}
