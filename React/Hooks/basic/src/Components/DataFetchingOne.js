import axios from 'axios';
import React, {useState, useEffect} from 'react'

function DataFetchingOne() {

  let [post, setPost] = useState({});
  let [loading , setLoading] = useState(true);
  let [error, setError] = useState(``);

  useEffect(() =>{
    axios.get(`https://jsonplaceholder.typicode.com/posts/3`)
      .then((response)=>{
        setLoading(false)
        setPost(response.data)
      })
      .catch((err)=>{
        setError(`There is err ${err}`)
      })
  }, []);

  return (
    <>
      {loading? 'Loading':post.title}
      {error? error :null}
    </>
  )
}

export default DataFetchingOne