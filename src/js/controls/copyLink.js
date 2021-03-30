import React from 'react'
import { useContext, useState, useEffect } from 'react'
import { useSpring, animated } from 'react-spring'
import styled from 'styled-components'
import { StateStore } from '../Store'
import { COLORS, FONT_SIZES } from '../theme'
import CopyButton from './buttons/CopyButton'
import Hover from './hover'

const CopyToast = styled(({ className, clicked }) => {
  const props = useSpring({
    display: clicked ? 'block' : 'none',
    position: 'absolute',
    top: clicked ? '40px' : '20px',
    opacity: clicked ? 1.0 : 0.5,
  })

  return (
    <animated.div {...{ className, style: props }}>Link copied!</animated.div>
  )
})`
  padding: 5px;
  line-height: ${FONT_SIZES.small};
  z-index: 2;
  background: ${COLORS.beige};
  color: black;
  font-size: ${FONT_SIZES.small};
  right: 55px;
`

const CopyLink = styled(({ className, disabled = false }) => {
  const { dispatch } = useContext(StateStore)
  const [clicked, setClicked] = useState(false)

  const onClick = () => {
    dispatch({
      type: 'shareClip',
    })

    setClicked(true)
  }

  useEffect(() => {
    if (clicked) {
      setTimeout(() => {
        setClicked(false)
      }, 500)
    }
  }, [clicked])

  return (
    <>
      <CopyButton {...{ className, onClick: disabled ? null : onClick }} />
      <CopyToast {...{ clicked }} />
    </>
  )
})`
  ${Hover}
`

export default CopyLink
