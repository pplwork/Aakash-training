import React,{useContext} from 'react'
import { CountContext } from '../../App'

function ComponentA() {
  const countContext = useContext(CountContext)
  return (
    <>
    <button onClick={()=>{countContext.countDispatch('increase')}}>Increase A</button>
    <button onClick={()=>{countContext.countDispatch('decrease')}}>Decrease A</button>
    <button onClick={()=>{countContext.countDispatch('reset')}}>Reset A</button>
    </>
  )
}

export default ComponentA