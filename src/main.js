import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import HelloReactStroyboard from './components/Hello/HelloReactStroyboard'
import asyncComponent from './lazy'

const Page1 = asyncComponent(() => import('./routes/page1'));

const App = () => {
  return (
    <div>
      <HelloReactStroyboard />
      <Page1 />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
