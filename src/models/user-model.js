const {model, Schema} = require('mongoose');

const modeloUser =new Schema({
    name:{
        type:String,
        require:true,
    },
    password:{
        type:String,
        require:true,
    },
    email:{
        type:String,
        require:true,
        unique:true,
    },
    isActive:{
        type:Boolean,
        default:true,
    },
    isAdmin:{
        type:Boolean,
        dafault:false,
    }
},
{
    versionKey:false,
    timestamps:true
})

module.exports=model('users',modeloUser)