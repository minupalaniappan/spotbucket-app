import React from 'react'
import styled from 'styled-components'
import { DisabledHover } from '../../content/hover'

const UnmuteButton = styled(({ className, onClick }) => (
  <svg
    width='24'
    height='24'
    viewBox='0 0 24 24'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
    {...{ className, onClick }}
  >
    <path
      d='M11 5L6 9H2V15H6L11 19V5Z'
      stroke='#FFF6F6'
      strokeWidth='1'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
))`
  ${DisabledHover}
`

export default UnmuteButton
