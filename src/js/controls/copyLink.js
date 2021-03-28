import React from 'react'
import { useContext } from 'react'
import styled from 'styled-components'
import { StateStore } from '../Store'
import CopyButton from './CopyButton'
import Hover from './hover'

const CopyLink = styled(({ className, disabled = false }) => {
  const { dispatch } = useContext(StateStore)

  const onClick = () => {
    dispatch({
      type: 'shareClip',
    })
  }

  return <CopyButton {...{ className, onClick: disabled ? null : onClick }} />
})`
  ${Hover}
`

export default CopyLink
