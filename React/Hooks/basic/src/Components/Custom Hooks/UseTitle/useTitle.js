import {useEffect} from 'react'

function useTitle(count) {

  useEffect(()=>{
    document.title = `Count - ${count}`
  }, [count]);

  return (
    <>
    
    </>
  )
}

export default useTitle