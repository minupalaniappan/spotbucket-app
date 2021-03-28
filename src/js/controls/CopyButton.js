import React from 'react'

const CopyButton = ({ className, onClick }) => (
  <svg
    width='22'
    height='22'
    viewBox='0 0 16 16'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
    {...{ className, onClick }}
  >
    <g clipPath='url(#clip0)'>
      <path
        d='M9.16667 4.125H5.04167C4.53541 4.125 4.125 4.53541 4.125 5.04167V9.16667C4.125 9.67293 4.53541 10.0833 5.04167 10.0833H9.16667C9.67293 10.0833 10.0833 9.67293 10.0833 9.16667V5.04167C10.0833 4.53541 9.67293 4.125 9.16667 4.125Z'
        stroke='#FFF6F6'
        strokeWidth='1'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M2.29175 6.87496H1.83341C1.5903 6.87496 1.35714 6.77838 1.18523 6.60647C1.01333 6.43457 0.916748 6.20141 0.916748 5.95829V1.83329C0.916748 1.59018 1.01333 1.35702 1.18523 1.18511C1.35714 1.0132 1.5903 0.916626 1.83341 0.916626H5.95841C6.20153 0.916626 6.43469 1.0132 6.6066 1.18511C6.7785 1.35702 6.87508 1.59018 6.87508 1.83329V2.29163'
        stroke='#FFF6F6'
        strokeWidth='1'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </g>
    <defs>
      <clipPath id='clip0'>
        <rect width='25' height='25' fill='white' />
      </clipPath>
    </defs>
  </svg>
)

export default CopyButton
