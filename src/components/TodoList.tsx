import React from 'react'
import Todo from './Todo'

const TodoList = (props:any) => {
    return (
        <div className="todo-container">
            <ul className="todo-list">
                {props.todos.map((todo: any) => (
                    <Todo text={todo.text} id={todo.id} />
                ))}
            </ul>
        </div>
    )
}

export default TodoList