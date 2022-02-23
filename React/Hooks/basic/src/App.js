import './App.css';
import React, { useReducer, useContext} from 'react';
import Counter from './Components/Custom Hooks/Counter/Counter';


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
      <Counter />
    </div>
  );
}

export default App;
