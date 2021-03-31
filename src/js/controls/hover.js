import { css } from 'styled-components'
import { COLORS } from '../theme'

const Hover = css`
  ${({ disabled }) =>
    disabled
      ? `
    cursor: default;
    svg, path {
      color: ${COLORS.dusk};
      stroke: ${COLORS.dusk};
    }
  `
      : `
    cursor: pointer;

    &:hover {
      svg, path {
        color: ${COLORS.white};
        stroke: ${COLORS.white};
      }
    }

    path {
      transition: all 0.2s;
    }
  `}
`

export const NonHoverFill = css`
  ${({ disabled }) =>
    disabled
      ? `
cursor: default;
svg, path {
  color: ${COLORS.dusk};
  stroke: ${COLORS.dusk};
}
`
      : `
cursor: pointer;

&:hover {
  svg, path {
    color: ${COLORS.white};
    stroke: ${COLORS.white};
    fill: ${COLORS.white};
  }
}

path {
  transition: all 0.2s;
}
`}
`

export default Hover
