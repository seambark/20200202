//import React from 'react'
import React, { useState } from 'react'
import Navber from './navbar'
import GlobalStlyes from './global-styles'

//class, Functional 2가지

//class 2가지 방법

//state

// class App extends React.Component {
//   state = {
//     title: '리엑트',
//   }

//   render() {
//     return <div>{this.state.title}</div>
//   }
// }

/*
  import styled from `styled-compoments`

  const
*/
function App() {
  const [title, setTitle] = useState('App페이지 Navber')
  return (
    <div>
      <GlobalStlyes />
      <Navber title={title} />
    </div>
  )
}

export default App
