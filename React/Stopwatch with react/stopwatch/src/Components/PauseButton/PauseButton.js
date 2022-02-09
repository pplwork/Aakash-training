import './PauseButton.css'
import React, { Component } from 'react';

const PauseButton =({timerOn, setTimerOn})=>{
  const HandlePause = () =>{
    if(timerOn === true){
      console.log(timerOn)
      setTimerOn(false);
      }
    else if(timerOn == false){
      setTimerOn(true)
      console.log(timerOn)
      }   
    }
     
    

    return(
      <>
        <button className="PauseButton" onClick={HandlePause}>{timerOn ? (document.innerHTML = 'Pause'):(document.innerHTML = 'Start')}
        </button>
      </>
    )
  
}
export default PauseButton;
