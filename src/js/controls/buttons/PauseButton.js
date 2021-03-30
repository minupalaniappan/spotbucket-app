import React from 'react'

const PauseButton = ({ className, onClick }) => (
  <svg
    width='22'
    height='22'
    viewBox='0 0 24 24'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
    {...{ onClick, className }}
  >
    <path
      d='M10 4H6V20H10V4Z'
      stroke='#FFF6F6'
      strokeWidth='1'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path
      d='M18 4H14V20H18V4Z'
      stroke='#FFF6F6'
      strokeWidth='1'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
)

export default PauseButton
