import React from "react"; 
import Todo from "./Todo";

export default function TodoList({ todoList, check }) {
    return (
        // loop over all of the todoList
        // for each one create a new "Todo" using the object
        todoList.map(todo => {
            return <Todo key={todo.id} check={check} todo={todo}/>
        })
    )
}