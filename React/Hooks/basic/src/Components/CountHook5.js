import React, { useState } from 'react'

function CountHook5() {
  let [items, setItems] = useState([{id:1,item:'milk'}]);
  let idCount = 1
  const HandleAdding=(e) =>{
    let toBeAdded = {id:idCount+1, item:e.target.value}
    setItems(
      [...items, toBeAdded]
    );
    idCount++;
  }
  return (
    <>
      Add a Item: <input onChange={HandleAdding}></input> 
      <ul>
        {
          items.map((i)=>(
            <li key={i.id}>{i.item}</li>
          ))
        }
      </ul>
    </>
    
  )
}

export default CountHook5