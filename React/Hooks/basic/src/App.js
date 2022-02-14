import './App.css';
import React, { useReducer, useContext} from 'react';
import ComponentA from './Components/ReduceComponent/ComponentA';
import ComponentB from './Components/ReduceComponent/ComponentB';

export const CountContext = React.createContext()

function App() {

  const initialState = 0;
  const reduce =(state, action) =>{
    switch(action){
      case 'increase':
        return state+1;
      case 'decrease' :
        return state-1
      case 'reset':
        return initialState
    }
  }

  let[count, dispatch] = useReducer(reduce, initialState)

  

  return (
    <div className="App">
      <h1>Hello</h1>
      
      <CountContext.Provider value={{countState:count, countDispatch:dispatch}}>
        <div>Count: {count}</div>
        <ComponentA/>
        <ComponentB />
      </CountContext.Provider>  
    </div>
  );
}

export default App;
