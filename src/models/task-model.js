const {model, Schema} = require('mongoose');

const modeloTask = new Schema({
    title:{
        type:String,
        require:true,
    },
    description:{
        type:String,
        require:true,
    },
},
{
    versionKey:false,
    timestamps:true
})

module.exports=model('tasks',modeloTask)