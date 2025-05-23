import { useState } from "react"
import { memo } from 'react';

function App() {

  const [firstTitle , setFirstTitle] = useState("My name is Ankit");

  function changeTitle(){
    setFirstTitle(`My name is ${Math.random()}`)
  }
  return (
    <div>
    <button onClick={changeTitle}>Click to change the title</button>
    <Header title = {firstTitle}/>
    <br/>
    <Header title = "My name is Rajesh"/>
    <Header title = "My name is Rajesh"/>
    <Header title = "My name is Rajesh"/>
    </div>
  )
}
const Header = memo(function ({title}){
  return <div>
    {title}
  </div>
})

export default App
