import './App.css';
import Header from './Components/Header/Header';
import AllButton from './Components/AllButton/AllButton';
import Watch from './Components/Watch/Watch';
import { useState } from 'react';
import React from 'react';

const App = () => {
  let [time, setTime] = useState(0);
  let [timerOn, setTimerOn] = useState(false);

  React.useEffect(()=>{
    
    let interval;
    if(timerOn){
      interval = setInterval(()=>{
        setTime(prevTime => prevTime+10)
      },10)
    }
    else{
      clearInterval(interval);
      console.log('Timer Reset')
    }
    return()=> clearInterval(interval)
  },[timerOn])

  return (
    <div className="App">
      <Header />
      <Watch time={time} setTime={setTime} timerOn={timerOn} setTimerOn={setTimerOn}/>
      <AllButton time={time} timerOn={timerOn} setTimerOn={setTimerOn} setTime={setTime}/>
    </div>
  );
}

export default App;
