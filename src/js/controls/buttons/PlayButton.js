import React from 'react'
import { COLORS } from '../../theme'

const PlayButton = ({ className, onClick }) => (
  <svg
    width='30'
    height='30'
    viewBox='0 0 30 30'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
    {...{ className, onClick }}
  >
    <circle cx='15' cy='15' r='15' fill={COLORS.grey} />
    <path
      d='M13 10L18.598 14.665L13 19.33L13 10Z'
      fill='black'
      stroke='black'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
)

export default PlayButton
