import { useState } from 'react'


function App() {
  const [todos, setTodos] = useState([
    {
      title : 'Play Cricket',
      description : 'Play cricket from 6-9'
    },
    {
      title : 'Dance ',
      description : 'Dance from 8- 10'
    },
    {
      title : 'Study',
      description : 'Study from 12- 15'
    }
  ])

  function addTodo(){
    setTodos([...todos, {
      title : 'Random todo',
      description : 'Random description'
    }])
  }

  return (
    <>
    <button onClick={addTodo}>Add random todos</button>
    {todos.map( (todo) => {
      return (
        <Todo title = {todo.title} description = {todo.description}></Todo>
      )
    })}
    </>
  )
}

function Todo(props){
  return <>
  <h1>Title : {props.title}</h1>
  <h5>Description : {props.description}</h5>
  </>
}
export default App
