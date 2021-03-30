import React from 'react'

const ForwardButton = ({ className, onClick }) => (
  <svg
    width='22'
    height='22'
    viewBox='0 0 24 24'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
    {...{ className, onClick }}
  >
    <path
      d='M5 4L15 12L5 20V4Z'
      stroke='#FFF6F6'
      strokeWidth='1'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path
      d='M19 5V19'
      stroke='#FFF6F6'
      strokeWidth='1'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
)

export default ForwardButton
