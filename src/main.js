import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import asyncComponent from './lazy'

const Page1 = asyncComponent(() => import('./routes/page1'));

// import Page1 from './routes/page1'

const App = () => {
  // import('./routes/page1')
  // .then(comp => {
  //   console.log("aaa" + comp);
  // })
  // .catch(error => {
  //   console.log("eee" + error);
  // })

  // let Page1 = null
  //import(/* webpackChunkName: "page1" */'./routes/page1').then(comp => {
  //   Page1 = comp
  //})
  // <Page1 />

  return (
    <div>
      <Page1 />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))