import React from 'react'
import {connect} from 'react-redux';
import {ClickResetButton} from '../../Actions/ClickResetButton'

function ResetButton(props) {
  const HandleReset = () =>{
    props.reset();
  }

  return (
    <button onClick={HandleReset}>Reset</button>
  )
}


const mapStateToProps = (state) =>{
  return state;
}

const mapDispatchToProps = (dispatch) =>{
  return{
    reset: () =>{
      dispatch(ClickResetButton());
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(ResetButton);