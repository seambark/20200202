import React from 'react'
import styled from 'styled-compoments'

const Container = styled.div`
  font-size: 32px;
  font-weight: bold;
  padding: 15px 10px;
`

// function Navbar(props) {
//   console.log(props)
//   return <div>{props.title}</div>
// }

function Navbar({ title }) {
  return <Container>{title}</Container>
}

export default Navbar
