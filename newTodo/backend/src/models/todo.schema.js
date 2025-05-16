import mongoose from "mongoose";

const todoSchema = new mongoose.Schema(
    {
        title : String,
        description : String,
        status : Boolean
    },
    {
        timestamps : true
    }
)

export default mongoose.model("Todo", todoSchema)