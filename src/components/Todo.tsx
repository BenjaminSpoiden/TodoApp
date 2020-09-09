import React from "react";

const Todo = (props: any) => {
  const deleteHandler = () => {
    props.setTodos(
      props.todos.filter((element: any) => element.id !== props.todo.id)
    );
  };

  const completeHandler = () => {
    props.setTodos(
      props.todos.map((element: any) => {
        if (element.id === props.todo.id) {
          return {
            ...element,
            completed: !element.completed
          };
        }
        return element
      })
    );
  };

  return (
    <div className="todo">
      <li className={`todo-item ${props.todo.completed ? "completed": ""}`}>{props.text}</li>
      <button onClick={completeHandler} className="complete-btn">
        <i className="fas fa-check"></i>
      </button>
      <button onClick={deleteHandler} className="trash-btn">
        <i className="fas fa-trash"></i>
      </button>
    </div>
  );
};
export default Todo;
