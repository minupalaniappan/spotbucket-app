import React, { useContext } from 'react'
import { StateStore } from './Store'
import { htmlToText } from 'html-to-text'
import { PLAYERNAMES } from '../fixtures/Names'
import useInterval from 'use-interval'

const PlayerProvider = ({ children }) => {
  const { dispatch } = useContext(StateStore)

  useInterval(() => {
    if (document) {
      const text = htmlToText(document.querySelector('body').outerHTML)

      const foundPlayers = Object.keys(PLAYERNAMES).filter((e) => {
        return text.includes(e)
      })

      dispatch({
        type: 'setFoundPlayers',
        foundPlayers: foundPlayers,
      })
    }
  }, 500)

  return <>{children}</>
}

export default PlayerProvider
