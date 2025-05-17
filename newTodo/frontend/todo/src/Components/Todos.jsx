
/*
    todos = [
    {
        title :
        description :
    },
    ]
*/


export function Todos({todos}){

    return <>
    {
        todos.map( (todo) => {
            return <div key={todo._id}>
            <h1>{todo.title}</h1>
            <h4>{todo.description}</h4>
            <button>{todo.status === true ? "Completed" : "Mark as done!"}</button>
            </div>
        } )
    }
    </>
}