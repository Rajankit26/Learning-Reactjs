import Greet from "./example"

const user = {
  firstName : "Ankit",
  lastName : "Raj"
}
const isLoggedIn = false;
function App() {

  return (
    <>
      <h1>Welcome to React</h1>
      {/*  Should be evaluated expression */}
      
      <h2><Greet />  {user.firstName}</h2>

      {/* <h2>Welcome {JSON.stringify(user)}</h2> */}

      

      <p>{isLoggedIn ? <h1>Dashboard</h1> : <button>Login</button>}</p>
    </>
  )
}

export default App
