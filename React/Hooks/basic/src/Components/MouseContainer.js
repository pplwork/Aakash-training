import React, { useState } from 'react'
import MouseEffect from './MouseEffect';

function MouseContainer() {
  let [display, setDisplay] = useState(true);
  return (
    <>
      <button onClick={() =>{setDisplay(!display)}}>Toggle Display</button>
      {display && <MouseEffect />}
    </>
  )
}

export default MouseContainer