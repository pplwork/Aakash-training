import './AllButton.css'
import LapButton from '../LapButton/LapButton';
import PauseButton from '../PauseButton/PauseButton';
import ResetButton from '../ResetButton/ResetButton';

const AllButton =({timerOn, setTimerOn, setTime, time}) =>{
  return(
    <>
      <div className='AllButton'>
      <PauseButton timerOn={timerOn} setTimerOn={setTimerOn}/>
      <ResetButton timerOn={timerOn} setTimerOn={setTimerOn} setTime={setTime}/>
        <LapButton time={time}/>
        
      </div>
    </>
  );
}

export default AllButton;