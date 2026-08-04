import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';

export default function TodoList() {

    let [todos,setTodos] = useState([{task: "sample-task", id:uuidv4()}]);
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
                    <span>{todo.task}</span> 
                    <button onClick={() => deleteTodo(todo.id)}  style={{marginLeft:'1rem'}}>Delete</button>
                    
                    </li>
                ))
             }
            </ul>
        </div>
    )
}