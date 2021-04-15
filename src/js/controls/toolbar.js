import React from 'react'
import Close from './close'
import CopyLink from './copyLink'
import styled from 'styled-components'
import { WIDTHS } from '../theme'
import { StateStore } from '../Store'
import { useContext } from 'react'
import BackwardArrowButton from './buttons/BackwardArrowButton'

const Container = styled.div`
  display: ${({ closed }) => (closed ? 'none' : 'flex')};
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  > div {
    align-items: center;
    gap: 10px;
    padding: ${WIDTHS.small};
  }

  > div:first-child {
    > svg {
      position: relative;
      bottom: 7px;
    }
  }

  > div:last-child {
    padding: ${WIDTHS.small};

    > svg:last-child {
      position: relative;
      bottom: 3px;
    }
  }
`

const Toolbar = () => {
  const { state, dispatch } = useContext(StateStore)

  if (!state) {
    return
  }

  const { closed } = state
  return (
    <Container {...{ closed }}>
      <div>
        <BackwardArrowButton
          onClick={() => {
            dispatch({
              type: 'setReady',
              ready: false,
            })

            dispatch({
              type: 'setContainer',
              container: 0,
            })

            dispatch({
              type: 'dismountData',
            })
          }}
        />
      </div>
      <div>
        <CopyLink />
        <Close />
      </div>
    </Container>
  )
}

export default Toolbar
