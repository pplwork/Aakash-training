import axios from 'axios';
import React, {useState, useEffect, useReducer} from 'react'

let initialState = { 
  post:{},
  loading: true,
  error: '',
}

const reducer = (state, action) =>{
  switch(action.type){
    case 'FETCH_SUC':
      return{
        post:action.payload,
        loading:false,
        error:'',  
      }
      case 'FETCH_ERR':
        return{
          post:{},
          loading:false,
          error:'Cannot get post',  
        }
  }
}

function DataFetchingTwo() {
  let [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() =>{
    axios.get(`https://jsonplaceholder.typicode.com/posts/3`)
      .then((response)=>{
        dispatch({type:'FETCH_SUC' , payload:response.data,});
      })
      .catch((err)=>{
        dispatch({type:'FETCH_ERR'});
      })
  }, []);

  return (
    <>
    {state.loading? 'Loading':state.post.title}
    {state.error? state.error :null}
    </>
  )
}

export default DataFetchingTwo