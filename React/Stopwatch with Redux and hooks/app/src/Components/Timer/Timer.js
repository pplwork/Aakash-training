import React from 'react'
import {connect} from 'react-redux'

function Timer(props) {
  return (
    <>
      <h1>Stop-Watch</h1>
      {console.log(props) }
      <div>
      <h2>
          {("0" + Math.floor(props.time / 3600000)).slice(-2)}:
          {("0" + Math.floor((props.time / 60000) % 60)).slice(-2)}:
          {("0" + Math.floor((props.time / 1000) % 60)).slice(-2)}:
          {("0" + ((props.time / 10) % 100)).slice(-2)}
      </h2>
        
      </div>
    </>
  )
}
const mapStateToProps = (state) => {
  return {
    time: state.time,
  };
};

export default connect(mapStateToProps)(Timer);