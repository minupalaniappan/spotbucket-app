import React from 'react'

const CloseButton = ({ className }) => (
  <svg
    width='22'
    height='22'
    viewBox='0 0 16 16'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
    {...{ className }}
  >
    <path
      d='M12 4L4 12'
      stroke='#FFF7F7'
      strokeWidth='1'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path
      d='M4 4L12 12'
      stroke='#FFF7F7'
      strokeWidth='1'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
)

export default CloseButton
