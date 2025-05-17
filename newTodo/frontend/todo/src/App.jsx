import { useState } from 'react'
import { CreateTodo } from './Components/CreateTodo'
import { Todos } from './Components/Todos'
import './App.css'

function App() {
  const [todos, setTodos] = useState([])

  return (
    <>
     <CreateTodo></CreateTodo>
    </>
  )
}

export default App
