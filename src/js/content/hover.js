import { css } from 'styled-components'
import { COLORS } from '../theme'

export const DisabledHover = css`
  ${({ disabled }) =>
    disabled
      ? `cursor: default;
opacity: 0.5;`
      : `cursor: pointer;

&:hover {
  circle {
  color: ${COLORS.white};
  fill: ${COLORS.white};
  }
}

path, circle {
transition: all 0.5s;`}
`
