import React, { useContext } from 'react'
import { skill, UserContext } from '../../App'
function Component2() {

  const skills = useContext(skill);
  const user = useContext(UserContext);
  return (
    <>
      <div>{user}---{skills}</div>
      <div>Component2</div>
    </>
    
  )
}

export default Component2