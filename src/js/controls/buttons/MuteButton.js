import React from 'react'
import styled from 'styled-components'
import { DisabledHover } from '../../content/hover'
import { COLORS } from '../../theme'

const MuteButton = styled(({ className, onClick }) => (
  <svg
    width='24'
    height='24'
    viewBox='0 0 24 24'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
    {...{ className, onClick }}
  >
    <path
      d='M11 5L6 9H2V15H6L11 19V5Z'
      stroke={COLORS.grey}
      strokeWidth='1'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path
      d='M23 9L17 15'
      stroke={COLORS.grey}
      strokeWidth='1'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path
      d='M17 9L23 15'
      stroke={COLORS.grey}
      strokeWidth='1'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
))`
  ${DisabledHover}
`

export default MuteButton
