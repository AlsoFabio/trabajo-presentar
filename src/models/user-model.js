const {model, Schema} = require('mongoose');

const modeloUser =new Schema({
    name:{
        type:String,
        required:true,
    },
    password:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
        unique:true,
    },
    isActive:{
        type:Boolean,
        default:true,
    },
    Role:{
        type:String,
        default:"No",
    }
},
{
    versionKey:false,
    timestamps:true
})

module.exports=model('users',modeloUser)