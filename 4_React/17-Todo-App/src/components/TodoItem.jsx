import React from "react";

const TodoItem = ({ item, deleteItem, editItem }) => {
  return (
    <div>
      <span>{item.value}</span>
      <div>
        <button onClick={()=> deleteItem(item.id)}>
            Delete
            </button>
        <button onClick={editItem}>
            Edit
            </button>
      </div>
    </div>
  );
};

export default TodoItem;
