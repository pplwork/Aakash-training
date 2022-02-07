import React, {Component} from "react";

class AddTodo extends Component{

  state = {
    content:''
  }

  submitHandler =(e)=>{
    e.preventDefault();
    this.props.addTodo(this.state);
  }
  changeHandler =(e)=>{
    this.setState({
      content:e.target.value
    })
    console.log(e.target.value)
  }
  render(){
    return(
      <div>
        <form onSubmit={this.submitHandler}>
          <label>Add new Todo : </label>
          <input type="text" onChange={this.changeHandler}
           value={this.state.content}/>
        </form>
      </div>
    );
  }
}
export default AddTodo;