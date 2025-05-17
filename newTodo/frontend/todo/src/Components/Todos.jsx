

export function Todos({todos}){
    return <>
    <h1>title : {todos.title}</h1>
    <h5>description : {todos.description}</h5>
    <button>{todos.status === true ? "Completed" : "Mark as complete"}</button>
    </>
}