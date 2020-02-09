import styled, { css } from 'styled-components'

/* 
    width, height, backgroundColor, position, margin, padding, display
    <Container margin="10px 0 20px 0" display="inline-block">
*/

const Container = styled.div`
    ${({ width }) =>
      width &&
      css`
        width: ${width}px;
      `}
    ${({ height }) =>
      height &&
      css`
        height: ${height}px;
      `} 

    ${({ position }) =>
      position &&
      css`
        position: ${position};
      `}

    ${({ display }) =>
      display &&
      css`
        display: ${display};
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
`

export default Container
