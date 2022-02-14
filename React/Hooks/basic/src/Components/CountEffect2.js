import React, { useEffect, useState } from 'react'

function CountEffect1() {
  let [count, setCount] = useState(0);
  
  useEffect(() =>{
    console.log('Use-Effect Updated')
    document.title = `You clicked count ${count} times`
  },[count]);
  const HandleClick =() =>{
    setCount(prevCount => prevCount+1); 
  }

  return (
    <>
      <input type="text"></input>
      <button onClick={HandleClick}>Click me to Update {count} times</button>
    </>
  )
}

export default CountEffect1