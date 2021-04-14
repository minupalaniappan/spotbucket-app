import React from 'react'
import { useContext } from 'react'
import { StateStore } from '../Store'
import BackwardButton from './buttons/BackwardButton'
import { fetchPage } from '../execute'

const Previous = () => {
  const { dispatch, state } = useContext(StateStore)

  if (!state) {
    return null
  }

  const { currentClip, page, ready } = state

  let type
  if (currentClip === 0) {
    type = 'prevPage'
  } else {
    type = 'prevClip'
  }

  return (
    <BackwardButton
      {...{
        disabled: currentClip === 0 || !ready,
        onClick:
          currentClip === 0 || !ready
            ? null
            : () => {
                if (type === 'prevPage') {
                  fetchPage({
                    playerName,
                    page: page - 1,
                  }).then((plays) => {
                    dispatch({
                      type,
                      plays: plays.plays,
                    })
                  })
                } else {
                  dispatch({
                    type: 'prevClip',
                  })
                }
              },
      }}
    />
  )
}
export default Previous
