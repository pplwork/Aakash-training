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

function ReduceCounter2() {

  let [count, dispatch] = useReducer(reduce, initialState)
  let [countTwo, dispatchTwo] = useReducer(reduce, initialState);
  return (
    <>
      <div>Count : {count}</div>
      <button onClick={()=>{dispatch('increment')}}>Increase</button>
      <button onClick={()=>{dispatch('decrement')}}>Decrease</button>
      <button onClick={()=>{dispatch('reset')}}>Reset</button>

      <div>Count : {countTwo}</div>
      <button onClick={()=>{dispatchTwo('increment')}}>Increase</button>
      <button onClick={()=>{dispatchTwo('decrement')}}>Decrease</button>
      <button onClick={()=>{dispatchTwo('reset')}}>Reset</button>
    </>
    
  )
}

export default ReduceCounter2