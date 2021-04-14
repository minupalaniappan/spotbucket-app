import React from 'react'
import { DisabledHover } from '../../content/hover'
import { COLORS } from '../../theme'
import styled from 'styled-components'

const BackwardArrowButton = styled(({ className, onClick }) => (
  <svg
    width='16'
    height='16'
    viewBox='0 0 16 16'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
    {...{ className, onClick }}
  >
    <path
      d='M15 8H1'
      stroke={COLORS.grey}
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path
      d='M8 15L1 8L8 1'
      stroke={COLORS.grey}
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
))`
  ${DisabledHover}
`

export default BackwardArrowButton
