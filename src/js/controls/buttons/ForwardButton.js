import React from 'react'

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
      fill='#FFF7F7'
      stroke='#FFF7F7'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path
      d='M9.5 2.5V9.5'
      stroke='#FFF7F7'
      strokeWidth='2'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
)

export default ForwardButton
