import mongoose from "mongoose";

export const connectDB= async ()=>{
    await mongoose.connect('mongodb+srv://maxitech:maxitech@cluster0.dgdc493.mongodb.net/maxitech').then(()=>console.log("DB connected"));
}

// mongodb+srv://maxitech:maxitech@cluster0.dgdc493.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0/