import React from "react";

const Todos =({todos, deleteTodo}) =>{
  const todoList = todos.length ? todos.map((ele)=>{
    return(
      <div className="collection-item" key={ele.id}>
        <span onClick={()=>{deleteTodo(ele.id)}}>{ele.content}</span>
      </div>
    );
  }):(<p>You have no todo's left</p>)
  return(
    <>
      <div>
        {todoList}
      </div>
      
    </>
  )
}

export default Todos;

