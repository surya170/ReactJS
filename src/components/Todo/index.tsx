import React from "react";
import Todoitem from "./Todo-item";
import './style.css';

const Todo : React.FC = () => {
     return (
        <div className="todo-container"> 
         <ol>
           <Todoitem/>
           <Todoitem/>
           <Todoitem/>
           <Todoitem/>
         </ol>
        </div>
     );
}
export default Todo;