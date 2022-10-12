const {model, Schema} = require('mongoose');

const modeloTask = new Schema({
    title:{
        type:String,
        required:true,
    },
    description:{
        type:String,
        required:true,
    },
    isActive:{
    type:Boolean,
    default:true,
    },
    isComplete:{
        type:Boolean,
        default:false,
    },
    idUser:{
        type:Schema.ObjectId,
        ref: 'users',
        required:true
    }
},
{
    versionKey:false,
    timestamps:true
})

module.exports=model('tasks',modeloTask)