import styled, { css } from 'styled-components'

type SectionProps = {
  fullWidth?: boolean
  noGutter?: boolean
}

export const Section = styled.div<SectionProps>(({ theme, fullWidth, noGutter }) => {
  const containerStyles = css`
    max-width: 1075px;
    margin: 0 auto;
  `

  const noGutterStyles = css`
    padding-left: 0;
    padding-right: 0;
  `

  return css`
    display: grid;
    grid-template-columns: 1fr;
    row-gap: ${theme.space[2]};
    padding: ${theme.space[4]} ${theme.space[1]};

    ${!fullWidth && containerStyles}
    ${noGutter && noGutterStyles}
  `
})
