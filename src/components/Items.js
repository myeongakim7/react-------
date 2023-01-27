// Item.js

import React from "react";

export default function Items({ todos, 삭제함수 }) {
  // console.log(props)
  return (
    <ul className="todoList">
      <h1>Items</h1>
      {todos.map((todo) => {
        return (
          <li key={todo.id}>
            {todo.title}
            <button
              onclick={(id) => {
                console.log("삭제");
                삭제함수(todo.id);
              }}
            >
              삭제
            </button>
          </li>
        );
      })}
    </ul>
  );
}
