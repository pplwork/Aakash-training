import React ,{useState} from 'react'

function CountHook4() {
  let [details, setDetails] = useState({
    firstName: '',
    lastName: '',
  });

  const fNameChange =(e) =>{
    
    setDetails({
      ...details,
      firstName:e.target.value
    });
  }

  const lNameChange =(e) =>{
    
    setDetails({
      ...details,
      lastName:e.target.value
    });
  }
  return (
    <>
    FirstName: <input type="text" onChange={fNameChange}></input> 
    LastName: <input type="text" onChange={lNameChange}></input>
    <div>FirstName is : {details.firstName}</div>
    <div>LastName is : {details.lastName}</div>
    <div>{JSON.stringify(details)}</div>
    </>
  )
}

export default CountHook4