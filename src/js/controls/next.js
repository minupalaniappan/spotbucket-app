import React from 'react'
import { useContext } from 'react'
import { StateStore } from '../Store'
import ForwardButton from './buttons/ForwardButton'
import { fetchPage } from '../execute'

const Next = () => {
  const { dispatch, state } = useContext(StateStore)

  if (!state || !state.player) {
    return null
  }

  const {
    currentClip,
    plays,
    hasNextPage,
    ready,
    player: { playerName },
    page,
  } = state

  let type
  if (currentClip + 1 === plays.length) {
    type = 'setPage'
  } else {
    type = 'nextClip'
  }

  return (
    <ForwardButton
      {...{
        disabled: !hasNextPage || !ready,
        onClick:
          !hasNextPage || !ready
            ? null
            : () => {
                dispatch({
                  type: 'setReady',
                  ready: false,
                })

                if (type === 'setPage') {
                  fetchPage({
                    playerName,
                    page,
                  }).then((plays) => {
                    dispatch({
                      type,
                      page: page + 1,
                      ...plays,
                    })

                    dispatch({
                      type: 'setReady',
                      ready: true,
                    })
                  })
                } else {
                  dispatch({
                    type: 'nextClip',
                  })
                }
              },
      }}
    />
  )
}

export default Next
