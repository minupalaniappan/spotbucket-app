import React from 'react'
import { useContext } from 'react'
import styled from 'styled-components'
import { StateStore } from '../Provider'
import { COLORS } from '../theme'

const MuteText = styled.div`
  text-transform: uppercase;
  color: ${COLORS.black};
  font-weight: 700;
  font-size: 12px;
`

const MuteButton = styled.div`
  background: ${({ muted }) => (muted ? COLORS.grey : COLORS.beige)};
  color: ${COLORS.black};
  width: 50px;
  padding: 5px 0;
  text-align: center;
  cursor: ${({ disabled }) => (disabled ? 'default' : 'pointer')};
  opacity: ${({ disabled }) => (disabled ? 0.9 : 1.0)};
`

const Mute = () => {
  const {
    dispatch,
    state: { muted, muteDisabled },
  } = useContext(StateStore)

  const onClick = () => {
    dispatch({
      type: 'muteClip',
    })
  }

  return (
    <MuteButton
      {...{
        muted,
        disabled: muteDisabled,
        onClick: muteDisabled ? '' : onClick,
      }}
    >
      <MuteText>{muted ? 'Unmute' : 'Mute'}</MuteText>
    </MuteButton>
  )
}

export default Mute
