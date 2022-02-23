import React, { useState } from 'react'
import useCounter from './useCounter'



function Counter() {

  let [counter, Increment, Decrement, Reset] = useCounter()
  return (
    <>
    <div>Count : {counter}</div>
    <button onClick={Increment}>Increment</button>
    <button onClick={Decrement}>Decrement</button>
    <button onClick={Reset}>Reset</button>
    </>
    
  )
}

export default Counter


