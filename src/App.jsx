// import hooks
import React, {useState, useRef, useEffect} from 'react';
import TodoList from "./TodoList";

// the key for the storage of the todo so when u refresh it stays
const LOCAL_STORAGE_KEY = "todoApp.todos"

function App() {
    // make the TodoList
    const [todos, setTodos] = useState([])

    // references teh input field so we can get the value stored in there
    const inputRef = useRef()

    // first load in, want to plug in data to website
    useEffect(() => {
        const storedTodos = JSON.parse( localStorage.getItem(LOCAL_STORAGE_KEY) )
        if (storedTodos) { setTodos(storedTodos) }
    }, [])

    // save the todos for future use
    useEffect(() => {
        localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos))
    }, [todos])

    function toggleTodo(id){
        // copy the table of todos then find the todo with a matching id
        const newTodos = [...todos]
        const todo = newTodos.find(todo => todo.id === id)
        
        // check the checkbox
        todo.complete = !todo.complete
        setTodos(newTodos)
    }
    
    function newTodo(e){
        // use the reference to create a new Todo
        const name = inputRef.current.value
        if (name === "") {  return; }
        setTodos(prevTodos => {
            return [...prevTodos, {id: prevTodos.length + 1, name: name, completed: false}]
        })
        
        inputRef.current.value = null
    }

    function clearTodos(){
        // delete any todo that is finished
        const newTodos = todos.filter(todo => !todo.complete)
        setTodos(newTodos)
    }

  // idk if i should put bootstrap in jsx...
  return (
      <>
          <h1 class="text-center display-3"> To-Do </h1>

          <h4>{ todos.filter(todo => !todo.complete).length } left to do </h4>
          
          <TodoList todoList={todos} check={toggleTodo}/>
          <input ref={inputRef} type="text" class="container-fluid"/>
          <div class="text-center">
            <button onClick={newTodo} class="btn btn-primary m-2"> Add </button>
            <button onClick={clearTodos} class="btn btn-danger m-2"> Clear Done </button>
          </div>
      </>
  );
}

export default App;