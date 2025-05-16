import { Router } from "express";
import {todo, getAllTodos, updatetodo} from '../controllers/todo.controller.js'

const router = Router()

router.post("/todo", todo)
router.get("/todo", getAllTodos)
router.put("/completed", updatetodo)

export default router;