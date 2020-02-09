import styled, { css } from 'styled-components'

/* 
    size, color, margin, padding, bold
    <Text color="blue" size="18" bold>블라블라</Text>
*/

const Text = styled.div`
  ${({ size }) => css`
    font-size: ${size || 13}px;
  `}
  ${({ margin }) =>
    margin &&
    css`
      margin: ${margin};
    `}
  ${({ padding }) =>
    padding &&
    css`
      padding: ${padding};
    `}
  ${({ bold }) =>
    bold &&
    css`
      font-weight: bold;
    `}  
`

export default Text
