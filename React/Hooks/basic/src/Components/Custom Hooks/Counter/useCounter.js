import {useState} from 'react'

function useCounter() {
  const [counter, setCounter] = useState(0);

  const Increment =()=>{
      setCounter(prev => prev+1);
  }

  const Decrement =()=>{
    setCounter(prev => prev-1);
  }

  const Reset =()=>{
    setCounter(0);
  }
  return (
    [counter, Increment, Decrement, Reset]
  )
}

export default useCounter