import React from 'react'

import HelloWelcome from './HelloWelcome'
import HelloComponent from './HelloComponent'
import HelloButton from './HelloButton'
import HelloClock from './HelloClock'
import HelloList from './HelloList'
import HelloRequest from './HelloRequest'

const HelloReactStroyboard = () => {
  return (
    <div>
      <HelloWelcome show={true} name={'小明'} messageCount={12} />
      <HelloComponent />
      <HelloButton />
      <HelloClock />
      <HelloList />
      <HelloRequest />

    </div>
  )
}

export default HelloReactStroyboard
