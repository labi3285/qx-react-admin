import React from 'react'

import HelloWelcome from './HelloWelcome'
import HelloComponent from './HelloComponent'
import HelloButton from './HelloButton'
import HelloClock from './HelloClock'
import HelloList from './HelloList'
import HelloRequest from './HelloRequest'
import HelloInput from './HelloInput'
import HelloRefs from './HelloRefs'

import HelloForm from './HelloForm'

import HelloFuncComponent from './HelloHooks'

const HelloReactStroyboard = () => {
  return (
    <div>
      <HelloFuncComponent name={"xxx"} />

      <HelloWelcome show={true} name={'小明'} messageCount={12} />
      <HelloComponent />
      <HelloButton />

      <HelloInput />
      <HelloRefs />
      <HelloForm />

      <HelloClock />
      <HelloList />
      <HelloRequest />

    </div>
  )
}

export default HelloReactStroyboard
