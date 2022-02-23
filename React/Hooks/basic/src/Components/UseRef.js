import React, { useRef } from 'react'
import { useEffect } from 'react'

function UseRef() {
  const inputRef = useRef(null);

  useEffect(()=>{
    inputRef.current.focus();
  },[]);


  return (
    <>
      Username: <input ref={inputRef} type="text"></input>
    </>
    
  )
}

export default UseRef