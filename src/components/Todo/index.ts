import React from "react";
import Todoitem from "./Todo-item";

const Todo : React.FC = () => {
    return (
         <div>
          <ol> 
            <Todoitem/>
            <Todoitem/>
            <Todoitem/>
            <Todoitem/>
          </ol>
         </div>
    )
};

export default Todo;