import React from 'react'
import ReactDOM from 'react-dom'
import _ from 'lodash'

import Clock from './components/Clock'

const HelloReactStroyboard = () => {

  const Timer = <h2>现在是</h2>
  // setInterval(tick, 1000);

  return (
    <div>
      <div>HelloReact</div>
      <Clock />
    </div>
  )
}

export default HelloReactStroyboard