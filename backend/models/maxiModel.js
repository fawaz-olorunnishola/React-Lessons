import mongoose from "mongoose";

const maxiSchema = new mongoose.Schema({
    name: {type:String,require:true},
    description: {type:String,require:true},
    price:{type:String,require:true},
    image:{type:String,require:true},
    category:{type:String,require:true},
})

const maxiModel = mongoose.models.maxi || mongoose.model("maxi",maxiSchema);

export default maxiModel; 