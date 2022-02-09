import './LapButton.css'
import React, { Component } from 'react';

const LapButton =()=>{
  const HandleLap = ({time}) =>{
    const lapTime = (Math.floor((time/60000)%24))+":"+Math.floor(((time/1000)%60)) +":"+(time/10)%100;
    console.log(lapTime); 
  }
    return(
      <>
      <button className="LapButton" onClick={HandleLap}>Lap</button>
      </>
    )
  
}
export default LapButton;
