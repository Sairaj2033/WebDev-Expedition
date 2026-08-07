import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';

export default function TodoList() {

    let [todos,setTodos] = useState([{task: "sample-task", isDone:false, id:uuidv4()}]);
    let [newTodo, setNewTodo] = useState("");

    let addNewTask = () => {
       setTodos((prevTodos) => {
         return[...prevTodos, {task:newTodo, id:uuidv4()}]
       }) ;
       setNewTodo("");    
    }

    let deleteTodo = (id) => {
     setTodos( (prevTodos) => todos.filter((prevTodos) => prevTodos.id != id));
    }

    let UpdateTaskValue = (event) => {
       setNewTodo(event.target.value);
    } 



    let UpperCaseAll = () => {
       setTodos((prevTodos) => 
        prevTodos.map((todo) => {
        return{
          ...todo, 
          task : todo.task.toLocaleUpperCase(), 
        }; 
      })
      );
    }


    let markAsDone = (id) => {

       setTodos((prevTodos) => 
        prevTodos.map((todo) => {
          if(todo.id == id) {
                 return{
          ...todo, 
          isDone: true,
        };
          } else {
            return todo;
          } 
      })
      );
      // console.log("one");
    };

          return (
        <div style={{marginTop:'20rem'}}>

            <input type="text" placeholder="add a task" value={newTodo} onChange={UpdateTaskValue} />
            <br />
            <button onClick={addNewTask}>Add Task</button>
            <br /> <br /><br /><br />

            <hr></hr>
            <h4>Todo Remaning </h4>
            <ul>
             {
                todos.map((todo) => (
                  <li key={todo.id}>
                    <span style={ todo.isDone ? {textDecorationLine: "line-through"}:{} }>{todo.task}</span> 
                    <button onClick={() => deleteTodo(todo.id)}  style={{marginLeft:'1rem'}}>Delete</button>
                    <button onClick={() => markAsDone(todo.id)}  style={{marginLeft:'1rem'}}> Mark As Done </button>
                     
                    </li>
                ))
             }
            </ul>
            <button onClick={UpperCaseAll} >UperaCase All</button>
            
        </div>
    );
}