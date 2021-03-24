import React from 'react'

const LinkButton = ({ className }) => (
  <svg
    width='25'
    height='25'
    viewBox='0 0 16 16'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
    {...{ className }}
  >
    <g clipPath='url(#clip0)'>
      <path
        d='M5.25 12.75L12.75 5.25'
        stroke='#FFF7F7'
        strokeWidth='2'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M5.25 5.25H12.75V12.75'
        stroke='#FFF7F7'
        strokeWidth='2'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </g>
    <defs>
      <clipPath id='clip0'>
        <rect width='18' height='18' fill='white' />
      </clipPath>
    </defs>
  </svg>
)

export default LinkButton
