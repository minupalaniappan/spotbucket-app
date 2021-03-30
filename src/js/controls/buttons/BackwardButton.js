import React from 'react'

const BackwardButton = ({ className, onClick }) => (
  <svg
    width='22'
    height='22'
    viewBox='0 0 24 24'
    fill='none'
    stroke='#FFF6F6'
    xmlns='http://www.w3.org/2000/svg'
    {...{ onClick, className }}
  >
    <path
      d='M19 20L9 12L19 4V20Z'
      stroke='#FFF6F6'
      strokeWidth='1'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path
      d='M5 19V5'
      stroke='#FFF6F6'
      strokeWidth='1'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
)

export default BackwardButton
