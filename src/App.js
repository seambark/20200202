//import React from 'react'
import React, { useState } from 'react'
import Navber from './navbar'

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
  const [title, setTitle] = useState('app페이지')
  return (
    <div>
      <Navber title={title} />
    </div>
  )
}

export default App
