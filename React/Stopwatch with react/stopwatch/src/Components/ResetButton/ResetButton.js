import './ResetButton.css'
import React, { Component } from 'react';

const ResetButton =({setTimerOn,setTime}) =>{

  const HandleReset =()=>{
    console.log('Reset button clicked')
    setTime(0)
    setTimerOn(false);
  }
    return(
      <>
        <button className="ResetButton" onClick={HandleReset}>Reset</button>
      </>
    )
}
export default ResetButton;
