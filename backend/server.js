import express from "express"
import cors from "cors"
import { connectDB } from "./config/db.js"
import maxiRouter from "./routes/maxiRoute.js"


// app config
const app = express()
const port = 4000

// middleware
app.use(express.json())
app.use(cors())


// db connection
connectDB();

// api endpoints
app.use("/api/maxi",maxiRouter)

app.get("/",(req,res)=>{
    res.send("API Working")
}) 

app.listen(port,()=>{
    console.log(`Server Started on http://localhost:${port}`)
    
})

// mongodb+srv://maxitech:maxitech@cluster0.dgdc493.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0