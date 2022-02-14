import React,{useState,useEffect} from 'react'
import axios from 'axios';

function DataFetching() {
  let[id, setId] = useState(1);
  let[post, setPost] = useState({});
  let [idFromButton, setIdFromButton] = useState(0);

  const HandleClick =() =>{
    setIdFromButton(id)
  }

  useEffect(()=>{
    axios.get(`https://jsonplaceholder.typicode.com/todos/${id}`)
      .then(res => {console.log(res)
        setPost(res.data);
      })
      .catch(err =>{console.log(err)})
  },[idFromButton]);
  return (
    <>
      <input type="text"  onChange={e=>{setId(e.target.value)}}></input>
      <button onClick={HandleClick} >Get Post</button>
      <ul>
        {
          <div>{post.title}</div>
        }
      </ul>
    </>
  )
}

export default DataFetching