import express from "express"
import cors from 'cors'
import dotenv from "dotenv"
import { connectToDb } from "./config/db.js";

dotenv.config();
const app = express();

connectToDb()

app.use(express.json())
app.use(cors());
app.get("/", (req, res) => {
    res.send('Hello from server')
})

export default app;
