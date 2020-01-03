import React from 'react'
import ReactDOM from 'react-dom'
// import HelloReactStroyboard from './components/Hello/HelloReactStroyboard'
// import asyncComponent from './lazy'

import { Button, Radio, Icon } from 'antd'

// const Page1 = asyncComponent(() => import('./routes/page1'));

const App = () => {
  return (
    <div>

      <div>
        <Button type="primary">Primary</Button>
        <Button>Default</Button>
        <Button type="dashed">Dashed</Button>
        <Button type="danger">Danger</Button>
        <Button type="link">Link</Button>
      </div>

      {/*<HelloReactStroyboard />*/}
      {/*<Page1 />*/}
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
