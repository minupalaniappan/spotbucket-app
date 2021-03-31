import React from 'react'
import { useContext } from 'react'
import { StateStore } from '../Store'
import ForwardButton from './buttons/ForwardButton'
import { NonHoverFill } from './hover'
import styled from 'styled-components'
import { fetchNextPage } from '../execute'

const Next = styled(({ className }) => {
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
        className,
        disabled: !hasNextPage || !ready,
        onClick:
          !hasNextPage || !ready
            ? null
            : async () => {
                dispatch({
                  type: 'setReady',
                  ready: false,
                })

                let plays = {}
                if (type === 'setPage') {
                  plays = await fetchNextPage({
                    playerName,
                    page,
                  })
                }

                dispatch({
                  type,
                  page: page + 1,
                  ...plays,
                })

                dispatch({
                  type: 'setReady',
                  ready: true,
                })
              },
      }}
    />
  )
})`
  ${NonHoverFill}
`

export default Next
