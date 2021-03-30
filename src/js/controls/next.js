import React from 'react'
import { useContext } from 'react'
import { StateStore } from '../Store'
import ForwardButton from './buttons/ForwardButton'
import Hover from './hover'
import styled from 'styled-components'

const Next = styled(({ className }) => {
  const { dispatch, state } = useContext(StateStore)

  if (!state) {
    return null
  }

  const { currentClip, plays, hasNextPage, ready } = state

  let type
  if (currentClip + 1 === plays.length) {
    type = 'nextPage'
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
                let plays = {}
                if (type === 'nextPage') {
                  plays = await fetchNextPage({
                    playerName,
                    page: page + 1,
                  })
                }

                dispatch({
                  type,
                  plays: plays.plays,
                })
              },
      }}
    />
  )
})`
  ${Hover}
`

export default Next
