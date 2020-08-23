import styled, { css } from 'styled-components'

type SectionProps = {
  fullWidth?: boolean
}

export const Section = styled.div<SectionProps>(({ theme, fullWidth }) => {
  const containerStyles = css`
    max-width: 1100px;
    margin: 0 auto;
  `

  return css`
    display: grid;
    grid-template-columns: 1fr;
    row-gap: ${theme.space[2]};
    padding: ${theme.space[4]} ${theme.space[1]};

    ${!fullWidth && containerStyles}
  `
})
