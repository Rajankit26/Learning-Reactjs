import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  const handleClick = () => {
    /* Based on old value  -> Simple case, ek hi baar update
    setCount(count + 1)
    setCount(count + 1)
    setCount(count + 1)

    */

    // Jab multiple updates karne hain ya current value pe depend hai
    setCount(count => count + 1)
    setCount( (count) => (count + 1) )
    setCount( (count) => (count + 1) )
    setCount( (count) => {return count + 1} )
    setCount( (count) => {return count + 1} )
    
    
  }
  const removeValue = () => {
  
    setCount(count => Math.max(0, count - 1))
    setCount(count => Math.max(0, count - 1))
  }
  return (
    <>
      <button onClick={handleClick}>Add value : {count}</button>
      <br />
      <button onClick={removeValue} disabled = {count === 0}>Remove Value : {count}</button>
    </>
  )
}

export default App
