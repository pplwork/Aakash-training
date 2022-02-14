import React,{useContext} from 'react'
import { CountContext } from '../../App'

function ComponentB() {
  const countContext = useContext(CountContext)
  return (
    <>
    <br />
    <button onClick={()=>{countContext.countDispatch('increase')}}>Increase A</button>
    <button onClick={()=>{countContext.countDispatch('decrease')}}>Decrease A</button>
    <button onClick={()=>{countContext.countDispatch('reset')}}>Reset A</button>
    </>
  )
}

export default ComponentB