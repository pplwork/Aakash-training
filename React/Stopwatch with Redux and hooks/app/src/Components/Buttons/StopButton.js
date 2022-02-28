import React from 'react'
import {connect} from 'react-redux';
import {ClickStopButton} from '../../Actions/ClickStopButton';



function StopButton(props) {
  
  const HandleStop = () =>{
    if(props.isStarted){
      props.stop();
    }
  }

  return (
    <button onClick={HandleStop}>Stop</button>
  )
}


const mapStateToProps = (state) =>{
  return state;
}

const mapDispatchToProps = (dispatch) =>{
  return{
    stop: ()=>{
      dispatch(ClickStopButton());
    }
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(StopButton);