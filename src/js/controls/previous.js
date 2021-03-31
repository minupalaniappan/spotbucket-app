import React from 'react'
import { useContext } from 'react'
import { StateStore } from '../Store'
import BackwardButton from './buttons/BackwardButton'
import { NonHoverFill } from './hover'
import styled from 'styled-components'

const Previous = styled(({ className }) => {
  const { dispatch, state } = useContext(StateStore)

  if (!state) {
    return null
  }

  const { currentClip, currentPage, ready } = state

  let type
  if (currentClip === 0) {
    type = 'prevPage'
  } else {
    type = 'prevClip'
  }

  return (
    <BackwardButton
      {...{
        className,
        disabled: currentPage === 0 || !ready,
        onClick:
          currentPage === 0 || !ready
            ? null
            : async () => {
                let plays = {}
                if (type === 'prevPage') {
                  plays = await fetchNextPage({
                    playerName,
                    page: page - 1,
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
  ${NonHoverFill}
`

export default Previous
