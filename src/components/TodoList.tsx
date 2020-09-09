import React from "react";
import Todo from "./Todo";

const TodoList = (props: any) => {
  return (
    <div className="todo-container">
      <ul className="todo-list">
        {props.filteredTodos.map((todo: any) => (
          <Todo
            setTodos={props.setTodos}
            todos={props.todos}
            key={todo.id}
            todo={todo}
            text={todo.text}
            id={todo.id}
          />
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
