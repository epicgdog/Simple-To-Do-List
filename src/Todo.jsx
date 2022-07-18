import React from "react"; 

export default function Todo( {check, todo} ){
    // crossses out text when Todo is finished
    const basic = "px-2 d-inline"
    
    return(
        <div class="p-2 bg-dark d-block my-1 rounded">

            <input type="checkbox" checked={todo.complete} 
                // check function from App.jsx that saves the checkbox status
                onChange={ () => { check(todo.id) } } 
            />
            <p class={todo.complete && (basic + " text-primary text-decoration-line-through") || (basic + " text-white")}> {todo.name} </p>
        
        </div>
    )
}