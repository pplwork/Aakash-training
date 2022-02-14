import React, {useState, useEffect} from 'react'

function MouseEffect() {
  let [x, setX] = useState(0);
  let [y, setY] = useState(0);

  const HandleMouseMove =(e) =>{
    console.log(`Handle Mouse Move called`);
    setX(e.clientX);
    setY(e.clientY);
  }

  useEffect(() =>{
    console.log(`Use Effect Called`);
    window.addEventListener('mousemove', HandleMouseMove);
    return(()=>{
      console.log(`Unmounting Code`);
      window.removeEventListener('mousemove', HandleMouseMove);
    });
  },[]);

  
  return (
    <>
      <div>X:{x}  Y:{y}</div>
    </>
  )
}

export default MouseEffect