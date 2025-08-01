import { useEffect, useState } from 'react'
import { CreateTodo } from './Components/CreateTodo'
import { Todos } from './Components/Todos'
import './App.css'

function App() {
  const [todos, setTodos] = useState([])

  useEffect( () => {
    fetch("http://localhost:5000/api/v1/todo")
    .then(async (res) => {
      const json = await res.json;
      setTodos(json.todos)
    })

  }, [])
  return (
    <>
     <CreateTodo></CreateTodo>
     <Todos todos={todos}></Todos>
    </>
  )
}

export default App
