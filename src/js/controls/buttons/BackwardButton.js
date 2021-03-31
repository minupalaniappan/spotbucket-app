import React from 'react'
import { COLORS } from '../../theme'

const BackwardButton = ({ className, onClick }) => (
  <svg
    width='12'
    height='12'
    viewBox='0 0 12 12'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
    {...{ className, onClick }}
  >
    <path
      d='M9.5 10L4.5 6L9.5 2L9.5 10Z'
      fill={COLORS.grey}
      stroke={COLORS.grey}
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path
      d='M2.5 9.5L2.5 2.5'
      stroke={COLORS.grey}
      strokeWidth='2'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
)

export default BackwardButton
