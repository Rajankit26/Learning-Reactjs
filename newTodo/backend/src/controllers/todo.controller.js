import Todo from "../models/todo.schema.js"
import { createTodo, updateTodo } from "../validations/todo.validation.js"

export const todo = async(req, res)=>{
    try {
        const createPayload = req.body;
        const parsedPayload = createTodo.safeParse(createPayload);

    if(!parsedPayload.success){
        return res.status(411).json({
            message : "You sent the wrong input"
        })
    }

    await Todo.create({
        title : createPayload.title,
        description : createPayload.description,
        status : false
    })

    res.status(200).json({
        success : true,
        message : "Todo created sucessfully"
    })

    } catch (error) {
        res.status(411).json({
            success : false,
            message : error.message
        })
    }
}

export const getAllTodos = async(req, res)=>{
    try {
        
        const todos = await Todo.find({})

        res.status(200).json({
            success : true,
            todos : todos
        })
    } catch (error) {
        res.status(411).json({
            success : false,
            message : error.message
        })
    }
}

export const updatetodo = async(req, res)=>{
    try {
        const updatePayload = req.body
        const parsedPayload = updateTodo.safeParse(updatePayload)

        if(!parsedPayload.success){
            return res.status(411).json({
                success : false,
                message : "You sent the wrong input"
            })
        }

        await Todo.findByIdAndUpdate({
            _id : req.body.id
        },
        {
            status : true
        }
    )

    res.status(200).json({
        success : true,
        message : "Todo marked as completed"
    })
    } catch (error) {
        res.status(411).json({
            success : false,
            message : error.message
        })
    }
}