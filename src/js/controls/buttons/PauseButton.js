import React from 'react'

const PauseButton = ({ className, onClick }) => (
  <svg
    width='30'
    height='30'
    viewBox='0 0 30 30'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
    {...{ className, onClick }}
  >
    <circle cx='15' cy='15' r='15' fill='#FFF7F7' />
    <path
      d='M13.8333 10.3333H11.5V19.6666H13.8333V10.3333Z'
      fill='black'
      stroke='black'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path
      d='M18.5001 10.3333H16.1667V19.6666H18.5001V10.3333Z'
      fill='#171717'
      stroke='black'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
)

export default PauseButton
