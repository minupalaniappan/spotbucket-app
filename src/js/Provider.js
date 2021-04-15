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
      paused: _paused,
      catalogHidden: _catalogHidden,
      toSpotBucket: _toSpotBucket,
    } = prevState

    switch (action.type) {
      case 'setToSpotBucket':
        return Object.assign({}, prevState, {
          toSpotBucket: action.toSpotBucket,
        })
      case 'setReady':
        return Object.assign({}, prevState, {
          ready: action.ready,
          prevDisabled: !action.ready,
          nextDisabled: !action.ready,
          muteDisabled: !action.ready,
          shareDisabled: !action.ready,
          muted: !action.ready,
        })
      case 'pauseClip':
        return Object.assign({}, prevState, {
          paused: !_paused,
        })
      case 'setContainer':
        return Object.assign({}, prevState, {
          container: action.container,
        })
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
          closed: true,
          muted: true,
          paused: true,
        })
      case 'setError':
        return Object.assign({}, prevState, {
          error: action.error,
        })
      case 'setPlays':
        return Object.assign({}, prevState, {
          plays: action.plays,
        })
      case 'nextPage':
        let nextPageNumber = _page + 1

        return Object.assign({}, prevState, {
          page: nextPageNumber,
          plays: action.plays,
        })
      case 'prevPage':
        let prevPageNumber = _page - 1

        return Object.assign({}, prevState, {
          page: prevPageNumber,
          plays: action.plays,
        })
      case 'shareClip':
        copy(_plays[_currentClip].videoUrl.videoUrl)

        return prevState
      case 'openLink':
        window.open(_plays[_currentClip].videoUrl.videoUrl, '_blank')

        return
      case 'setFoundPlayers':
        return Object.assign({}, prevState, {
          foundPlayers: action.foundPlayers,
        })
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
      case 'dismountData':
        return Object.assign({}, prevState, initialState, {
          foundPlayers: prevState.foundPlayers,
        })
      default:
        return prevState
    }
  }, initialState)

  return <Provider value={{ state, dispatch }}>{children}</Provider>
}
