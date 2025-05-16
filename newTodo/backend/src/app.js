import express from "express"
import cors from 'cors'
import dotenv from "dotenv"
import { connectToDb } from "./config/db.js";
import todoRoutes from './routes/todo.routes.js'

dotenv.config();
const app = express();

connectToDb()

app.use(express.json())
app.use(cors());

app.use('/api/v1', todoRoutes)
app.get("/", (req, res) => {
    res.send('Hello from server')
})

export default app;
