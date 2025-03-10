import React, { useState } from "react";

const TodoInput = ({ addItem }) => {
  
  const[userInput, setuserInput] = useState("");  
  
  return (
    <div>
      <input type="text" value={userInput} placeholder="add item..." onChange={(e)=> setuserInput(e.target.value)}/>

      <br />
      <button onClick={()=>{
        addItem(userInput);
        setuserInput("");
      }}>
        ADD
        </button>

    </div>

  );
};

export default TodoInput;
