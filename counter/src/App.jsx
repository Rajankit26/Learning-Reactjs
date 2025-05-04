import { useState } from "react"

function App() {
  const [count, setCounter] = useState(0)
  function addValue(){
    setCounter(count + 1)
  }
  return (
    <>
      <button onClick={addValue}
      >Count : {count}</button>
    </>
  )
}

export default App
