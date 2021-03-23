import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { useContext } from 'react'
import styled from 'styled-components'
import { StateStore } from '../Store'
import { COLORS } from '../theme'

const ShareText = styled.div`
  text-transform: uppercase;
  color: ${COLORS.white};
  font-weight: 700;
  font-size: 12px;
`

const ShareButton = styled.div`
  background: ${({ disabled }) => (disabled ? COLORS.grey : COLORS.green)};
  color: ${COLORS.white};
  text-align: center;
  cursor: ${({ disabled }) => (disabled ? 'default' : 'pointer')};
  opacity: ${({ disabled }) => (disabled ? 0.9 : 1.0)};
`

const Share = () => {
  const { dispatch, state } = useContext(StateStore)

  if (!state) {
    return null
  }

  const { shareDisabled } = state

  const [clicked, setClicked] = useState(false)
  const [disabled_, setDisabled] = useState(shareDisabled)

  const onClick = () => {
    dispatch({
      type: 'shareClip',
    }).then(() => {
      setClicked(true)
      setDisabled(true)
    })
  }

  useEffect(() => {
    if (clicked) {
      setTimeout(() => {
        setClicked(false)
        setDisabled(false)
      }, 1000)
    }
  }, [clicked])

  return (
    <ShareButton {...{ disabled_, onClick: disabled_ ? null : onClick }}>
      <ShareText>{clicked ? 'Copied!' : 'Copy Link'}</ShareText>
    </ShareButton>
  )
}

export default Share
