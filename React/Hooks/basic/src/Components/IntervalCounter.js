import React, { useEffect, useState } from 'react'

function IntervalCounter() {
  let [count, setCount] = useState(0);
  
  useEffect(()=>{
    let interval = setInterval(tick, 1000)
    return(()=>{
      clearInterval(interval);
    });
  }, [count]);
  const tick =() =>{
    setCount(prevCount => prevCount +1);
  }
  return (
    <>
      <div>{count}</div>
    </>
  )
}

export default IntervalCounter