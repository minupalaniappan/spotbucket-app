import React from 'react'
import { COLORS } from '../../theme'

const ForwardButton = ({ className, onClick }) => (
  <svg
    width='12'
    height='12'
    viewBox='0 0 12 12'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
    {...{ className, onClick }}
  >
    <path
      d='M2.5 2L7.5 6L2.5 10L2.5 2Z'
      fill={COLORS.grey}
      stroke={COLORS.grey}
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path
      d='M9.5 2.5V9.5'
      stroke={COLORS.grey}
      strokeWidth='2'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
)

export default ForwardButton
