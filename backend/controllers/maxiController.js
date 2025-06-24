import maxiModel from "../models/maxiModel.js";
import fs from 'fs';


// add maxi item

const addMaxi = async (req,res) => {

    let image_filename = `${req.file.filename}`;

    const maxi = new maxiModel({
        name:req.body.name,
        description:req.body.description,
        price:req.body.price,
        category:req.body.category,
        image:image_filename
    })
    try {
        await maxi.save();
        res.json({succes:true,message:"Item Added"})
    } catch (error) {
        console.log(error)
        res.json({success:false,message:"Error"})
    }
}

export {addMaxi}