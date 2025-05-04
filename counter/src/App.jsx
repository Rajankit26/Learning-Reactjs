import { useState } from "react"

function Counter(){
  const [count, setCount] = useState(10)

  const plusOne = () => {
    setCount(count + 1);
  }
  return (
    <button onClick={plusOne}>Count : {count}</button>
  )
}

function App() {
  const [count, setCounter] = useState(0)
  function addValue(){
    setCounter(count + 1)
  }
  return (
    <>
      <button onClick={addValue}
      >Count : {count}</button>
    

      <Counter />
      <Counter />    
      <Counter />
      <Counter />
    </>
  )
}

export default App
