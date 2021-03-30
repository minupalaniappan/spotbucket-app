import React from 'react'

const PlayButton = ({ className, onClick }) => (
  <svg
    width='22'
    height='20'
    viewBox='0 0 24 24'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
    {...{ className, onClick }}
  >
    <path
      d='M5 3L19 12L5 21V3Z'
      stroke='#FFF6F6'
      strokeWidth='1'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
)

export default PlayButton
