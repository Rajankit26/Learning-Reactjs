import { useEffect, useState } from 'react'

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  // Mount + update 
  useEffect( () => {
    console.log(`Count changed to ${count}`)
  }, [count])

  // Unmount
  useEffect( ()=>{
    return () => {
      console.log(`Component removed from screen`)
    }
  }, [])
  return (
    <>
    <h2>Hello</h2>
    <button onClick={() => setCount(count + 1)}>Counter</button>
    </>
  )
}

export default App
