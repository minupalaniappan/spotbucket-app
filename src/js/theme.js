import GoogleFontLoader from 'react-google-font-loader'
import styled from 'styled-components'
import React from 'react'

export const COLORS = {
  black: '#000000',
  white: '#FFFFFF',
  beige: '#FFF6F6',
  red: '#E21936',
  brown: '#482A2A',
  green: '#00BD35',
  grey: '#BDBDBD',
  shadow: '#E2E2E2',
}

export const FONT_SIZES = {
  small: '12px',
  medium: '16px',
  large: '24px',
}

export const WIDTHS = {
  small: '20px',
  medium: '50px',
  large: '100px',
}

const FontStyle = styled.div`
  font-family: 'Space Mono' !important;
`

export const FontProvider = ({ children }) => {
  return (
    <>
      <GoogleFontLoader
        fonts={[
          {
            font: 'Space Mono',
            weights: [400, '400i', 700, '700i'],
          },
        ]}
      />
      <FontStyle>{children}</FontStyle>
    </>
  )
}
