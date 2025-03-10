import React, { useState } from "react";
import TodoInput from "./components/TodoInput";
import TodoItem from "./components/TodoItem";
<script src="https://cdn.tailwindcss.com"></script>
const App = () => {
  const[list, setlist] = useState([]);
  const addItem = (userInput)=>{
    //userInput.trim() !== "" ensures that the user does not add blank spaces as a todo
    if(userInput.trim() !== ""){
      //id: Math.random() → Generates a random ID for the todo item
      setlist([...list, {id: Math.random(), value: userInput}]);
      //setList([...list, newItem]) updates the state, triggering a re-render
      //[...list, newItem]: Creates a new array with the existing items and adds the new todo at the end
    }
  };
  const deleteItem = (id)=>{
    setlist(list.filter((item) => item.id !== id));
    //list.filter((item) => item.id !== id):This creates a new list, keeping only the items whose ID does not match the one to be deleted
  };
  const editItem = (index)=>{
    //const newList = [...list] → Copies the current list so we don’t modify state directly
    const newList = [...list]
    const editedvalue = prompt("Edit the todo list" , newList[index].value);
    //prompt("Edit the todo:", newList[index].value) opens a pop-up where the user can enter a new value
    if(editedvalue !== null && editedvalue.trim !== ""){ //If the user presses Cancel, prompt() returns null, so we ignore it
     // If the input is just spaces (trim() === ""), we ignore it
      newList[index].value = editedvalue;
      setlist(newList);
    }
  };
  return (
    <div className="flex flex-col items-center p-6 bg-gray-100 min-h-screen">
      <h1 >TODO LIST</h1>
      <TodoInput addItem={addItem}/>
      <div>
        {list.map((item, index) => (
          <TodoItem key={item.id} item={item} deleteItem={deleteItem} editItem={()=>editItem(index)}/>
        ))}
      </div>
    </div>
  );
};

export default App;
