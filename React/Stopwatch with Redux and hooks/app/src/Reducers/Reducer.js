const initState = {
  isStarted: false,
  time: 0,
  laps: [],
  interval: {}
}

const Reducer = (state=initState, action) =>{
  switch(action){
    case 'START_TIMER':
      state.isStarted = true
      if(state.isStarted){
        return {...state, 
          time: state.time+10,
          isStarted:true,
          interval: action.interval
        };
      }
    
    case 'STOP_TIMER':
      clearInterval(state.interval)
      return{
        ...state,
        isStarted:false,
        interval: {}
      }
    
    case 'RESET_TIMER':
      if(state.isStarted === false){
        return {
          ...state, 
          time: 0,
          laps: []
        };
      }
  }
  return state;
}

export default Reducer;