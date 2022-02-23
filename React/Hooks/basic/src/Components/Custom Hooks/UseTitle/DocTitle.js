import React, {useState} from 'react'
import useTitle from './useTitle';

function DocTitle() {

  const [count, setCount] = useState(0);
  useTitle(count);

  return (
    <>
      <button onClick={()=>{setCount(count+1)}}>Count - {count}</button>
    </>
  )
}

export default DocTitle