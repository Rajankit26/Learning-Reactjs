import { useState } from "react";

export function CreateTodo(){

    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")

    return (
        <>
        
        <input
        id="title" style={{
            padding : 10, 
            margin : 10
        }} type="text" placeholder="title"
        onChange={ (e) => 
            {
                setTitle(e.target.value)
            }}
        ></input><br />


        <input
        id="desc" style={{
            padding : 10, 
            margin : 10
        }} type="text" placeholder="description"
        onChange={ (e) =>{
            setDescription(e.target.value)
        }}
        ></input><br />

        <button
        onClick={ async () =>{
          const res = await fetch("http://localhost:5000/api/v1/todo", {
                method : "POST",
                headers : {
                    "Content-Type" : "application/json"
                },
                body : JSON.stringify({
                    title : title,
                    description : description
                })
            });
            const json = await res.json()
            alert("Todo added")
        }}
        >Add a Todo</button>
        </>
    )
}  