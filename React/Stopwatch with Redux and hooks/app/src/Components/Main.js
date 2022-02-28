import React from 'react'
import Timer from './Timer/Timer'
import StartButton from './Buttons/StartButton'
import StopButton from './Buttons/StopButton'
import ResetButton from './Buttons/ResetButton'

function Main() {
  return (
    <>
      <React.Fragment>
      <Timer />
      <StartButton />
      <StopButton />
      <ResetButton />
      </React.Fragment>
      
    </>
  )
}

export default Main