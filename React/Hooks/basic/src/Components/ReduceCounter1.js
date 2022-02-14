import React, {useReducer} from 'react'


const initialState = 0;
const reduce =(state, action) =>{
  switch(action){
    case'increment':
      return state+1
    case 'decrement':
      return state-1
    case 'reset':
      return initialState
  }
}

function ReduceCounter1() {

  let [count, dispatch] = useReducer(reduce, initialState)
  return (
    <>
      <div>Count : {count}</div>
      <button onClick={()=>{dispatch('increment')}}>Increase</button>
      <button onClick={()=>{dispatch('decrement')}}>Decrease</button>
      <button onClick={()=>{dispatch('reset')}}>Reset</button>
    </>
    
  )
}

export default ReduceCounter1