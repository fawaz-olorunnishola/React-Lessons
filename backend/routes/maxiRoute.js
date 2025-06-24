import express from "express";
import { addMaxi } from "../controllers/maxiController.js";
import multer from "multer";

const maxiRouter = express.Router();

// Image Storage Engine 

const storage = multer.diskStorage({
    destination:"uploads",
    filename:(req,file,cb)=>{
        return cb(null,`${Date.now()}${file.originalname}`)
    }
})

const upload = multer({storage:storage})

maxiRouter.post("/add",upload.single("image"),addMaxi)

 




export default maxiRouter;