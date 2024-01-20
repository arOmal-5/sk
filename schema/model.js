const mongoose = require('mongoose')


const dataSchema =  new mongoose.Schema({
    id:{
        type:Number,
        required:true,
        unique:true
    },
    cordinatorName:{
        type:String,
        required:true,
    },
    pickUp:{
        type:String,
        required:true,
    },
    destination:{
        type:String,
        required:true,
    },
    date:{
        type:String,
        required:true,
    },
    time:{
        type:String,
        required:true,
    },
    estimatedAmount:{
        type:Number,
        required:true,
    },
    contactNumber:{
        type:Number,
        required:true,

    }
}) 

const Model = mongoose.model('Model',dataSchema)
module.exports = Model