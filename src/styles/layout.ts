import styled, { css } from 'styled-components'

const paddingY = css(({ theme }) => {
  return css`
    padding-top: ${theme.space[3]};
    padding-bottom: ${theme.space[3]};

    ${theme.mediaQueries.sm} {
      padding-top: ${theme.space[4]};
      padding-bottom: ${theme.space[4]};
    }
  `
})

export const PaddingY = styled.div<SectionProps>(({ theme }) => {
  return css`
    ${paddingY}
  `
})

type SectionProps = {
  fullWidth?: boolean
  noGutter?: boolean
}

export const Section = styled.section<SectionProps>(({ theme, fullWidth, noGutter }) => {
  const containerStyles = css`
    max-width: 1075px;
    margin: 0 auto;
  `

  const noGutterStyles = css`
    padding-left: 0;
    padding-right: 0;
  `

  return css`
    ${paddingY}

    display: grid;
    grid-template-columns: 1fr;
    row-gap: ${theme.space[2]};
    padding-left: ${theme.space[1]};
    padding-right: ${theme.space[1]};

    ${!fullWidth && containerStyles}
    ${noGutter && noGutterStyles}
  `
})

type RowProps = {
  cols?: 2 | 3
  offset?: 1 | 2
}

export const Row = styled.div<RowProps>(({ theme, cols = 2, offset = 0 }) => {
  const offsetStyles = css`
    ${theme.mediaQueries.md} {
      grid-template-columns: ${6 + offset}fr ${6 - offset}fr;
    }
  `

  return css`
    display: grid;
    justify-items: start;
    align-items: center;
    grid-template-columns: 1fr;
    column-gap: ${theme.space[1]};
    row-gap: ${theme.space[4]};

    ${theme.mediaQueries.sm} {
      grid-template-columns: repeat(${cols}, 1fr);
    }

    ${cols === 2 && !!offset && offsetStyles}
  `
})
