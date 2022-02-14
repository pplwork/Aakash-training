import React, { useEffect, useState } from 'react'

function CountEffect1() {
  let [count, setCount] = useState(0);
  
  useEffect(() =>{
    document.title = `You clicked count ${count} times`
  });
  const HandleClick =() =>{
    setCount(prevCount => prevCount+1); 
  }

  return (
    <>
      <button onClick={HandleClick}>Click me to Update {count} times</button>
    </>
  )
}

export default CountEffect1