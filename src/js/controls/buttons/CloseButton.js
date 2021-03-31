import React from 'react'
import { COLORS } from '../../theme'

const CloseButton = ({ className, onClick }) => (
  <svg
    width='22'
    height='22'
    viewBox='0 0 16 16'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
    {...{ className, onClick }}
  >
    <path
      d='M12 4L4 12'
      stroke={COLORS.grey}
      strokeWidth='1'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path
      d='M4 4L12 12'
      stroke={COLORS.grey}
      strokeWidth='1'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
)

export default CloseButton
