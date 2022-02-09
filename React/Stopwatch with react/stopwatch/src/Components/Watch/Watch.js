import './Watch.css';
import React from 'react';

const Watch = ({time, setTime, timerOn, setTimerOn}) => {



    return(
      <>
        <div>
          <span className='Watch'> {(Math.floor((time/60000)%24))} :</span>
          <span className='Watch'> {Math.floor(((time/1000)%60))} :</span>
          <span className='Watch'> {(time/10)%100}</span>
        </div>
        
      </>
      );
    
}

export default Watch;