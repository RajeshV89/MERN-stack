const mongoose = require('mongoose');

const contentSchema = new mongoose.Schema(
    {
        title:{
            type:String,
            required:true,
        },       
        context:{
            type:String,
            required:true,
        },        
        imgUrl:{
            type:String,
            required:true,
        },
    },
    {
            timestamps:true
        }
    
);

const Content =mongoose.model("Content",contentSchema);

module.exports=Content;