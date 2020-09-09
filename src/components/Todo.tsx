import React from "react"

const Todo = (props: any) => {

    const deleteHandler = () => {
        props.setTodos(props.todos.filter((element: any) => element.id !== props.todo.id))
        console.log(props.todo)
    }

    return(
        <div className="todo">
            <li className="todo-item">
                {props.text}
            </li>
            <button className="complete-btn">
                <i className="fas fa-check"></i>
            </button>
            <button onClick={deleteHandler} className="trash-btn">
                <i className="fas fa-trash"></i>
            </button>
        </div>
    )
}
export default Todo