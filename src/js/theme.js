import styled from 'styled-components'

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

export const FontProvider = styled.div`
  @font-face {
    font-family: Mono;
    src: url('https://fonts.googleapis.com/css2?family=Space+Mono&display=swap');
    font-weight: 400;
  }

  @font-face {
    font-family: Mono;
    src: url('https://fonts.googleapis.com/css2?family=Space+Mono:ital@1&display=swap');
    font-style: italic;
  }

  @font-face {
    font-family: Mono;
    src: url('https://fonts.googleapis.com/css2?family=Space+Mono:ital,wght@1,700&display=swap');
    font-weight: 700;
    font-style: italic;
  }

  @font-face {
    font-family: Mono;
    src: url('https://fonts.googleapis.com/css2?family=Space+Mono:wght@700&display=swap');
    font-weight: 700;
  }

  * {
    font-family: Mono !important;
  }
`
