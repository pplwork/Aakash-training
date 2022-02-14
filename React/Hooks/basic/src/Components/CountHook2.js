import React, {useState} from 'react'

function CountHook2() {
  const initialState = 0;
  let [count , setCount] = useState(initialState)
  return (
    <>
      <div>Count: {count}</div>
      <button onClick = {() =>{setCount(prevCount => prevCount+1)}}>Increment</button>
      <button onClick = {() =>{setCount(prevCount=> prevCount-1)}}>Decrement</button>
      <button onClick = {() =>{setCount(initialState)}}>Reset</button>
    </>
    
  )
}

export default CountHook2