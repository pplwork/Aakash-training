import React from 'react'
import { useEffect, useState, useRef } from 'react'

function HookTimer() {

  const btnRef = useRef(null);

  let [timer, setTimer] = useState(0);

  useEffect(()=>{
      btnRef.current  = setInterval(()=>{
      setTimer(prev => prev+1)
    },1000);
    return (()=>{
      clearInterval(btnRef.current);
    })
  },[]);

  return (
    <>
      <div> Hook Timer - {timer}</div><br />
      <div>
        <button onClick={()=>{clearInterval(btnRef.current)}}>Stop</button>
      </div>
    </>
  )
}

export default HookTimer