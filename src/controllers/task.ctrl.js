const modeloTask = require('../models/task-model');
const modeloUser = require('../models/user-model');
const ctrlTask = {};

// GET tareas
ctrlTask.getTasks=async(req,res)=>{
    try {
        const task = await modeloTask.find({isActive: true})
        .populate("idUser",['name', 'email']);
        return res.json({
            message:`Tareas encontradas ${task.length}`,
            task
        });
    } catch (error) {
        return res.status(404).json({message:"No se puede encontrar las tareas"})
    }
}

// GET tarea
ctrlTask.getTask=async(req,res)=>{
    try {
        const id = req.params.idTask;
        const task = await modeloTask.findOne({$and:[{_id:id},{isActive: true}]})
        .populate("idUser",['name', 'email']);
        if(!task){return res.json({
            message:"Tarea no encontrada",
        })}
        if(task){
            return res.json({
                message:"Tarea encontrada",
                task
            })
        }
    } catch (error) {
        return res.status(404).json({message:"No se puede encontrar las tareas"})
    }
}

// GET tareas por usuario
ctrlTask.getTaskUser=async(req,res)=>{
    try {
        const idUser = req.user._id
        const task = await modeloTask.find({$and:[{isActive:true},{idUser}]})
        .populate("idUser",['name', 'email']);
        if(!task){return res.json({
            message:"Tarea no encontrada",
        })}
        
        return res.json({
            message:"Tarea encontrada",
            task
        })
        
    } catch (error) {
        return res.status(404).json({message:"No se puede encontrar las tareas",error})
    }
}


// POST tareas
ctrlTask.postTask=async(req,res)=>{
    try {
        const idUser = req.user._id;
        const {title,description} = req.body
        if(!idUser||!title||!description){
            return res.status(400).json({
                message:"No se puede crear la tarea.",
                descripcion:["idUser", "title", "description"]
            });
        }
        const user = await modeloUser.findOne({_id:idUser});
        if(!user){
            return res.status(404).json({
                message:"La cuenta no existe."
            });
        }

        const task = new modeloTask({
            title,
            description,
            idUser
        });
        await task.save();
        return res.json({message:"Tarea Creada"});
    } catch (error) {
        return res.status(404).json({message:"Tarea no Creada"});
    }
}

// PUT tareas
ctrlTask.putTask=async(req,res)=>{
try {
    const idUser=req.user._id;
    const id = req.params.idTask;
    const {title,description} = req.body;
    if(!title || !description){
        return res.json({message:"Campos vacios"});
    }
    const task = await modeloTask.findOne({$and:[{_id:id},{isActive: true}]});
    const userIDComparar=idUser.toString();
    const taskIDComparar=task.idUser.toString();
    if(!(userIDComparar===taskIDComparar)){
        return res.json({message:"No tiene permiso para realizar esta acción"});
    }
    await task.updateOne({
        title,
        description
    });
    return res.json({
        message:"Tarea Actualizada"});
} catch (error) {
    return res.json({message:"no se pudo actualizar la Tarea"})
}   
}

// COMPLETAR tareas
ctrlTask.putTaskComplete=async(req,res)=>{
    try {
        const idUser=req.user._id;
        const id = req.params.idTask;

        const task = await modeloTask.findOne({$and:[{_id:id},{isActive: true}]});

        const userIDComparar=idUser.toString();
        const taskIDComparar=task.idUser.toString();
        
        if(!(userIDComparar===taskIDComparar)){
            return res.status(404).json({
                message:"No tiene permiso para realizar esta acción"
            });
        }
        if(!task){
            return res.json({message:"No se encontro la Tarea"});
        }
        await task.updateOne({
            isComplete: true
        });
        return res.json({
            message:"Tarea Completada"});
    } catch (error) {
        return res.json({message:"no se pudo completar la Tarea"})
    }
}

// DELETE tareas
ctrlTask.deleteTask=async(req,res)=>{
    try {
        const idUser=req.user._id;
        const id = req.params.idTask;

        const task = await modeloTask.findOne({$and:[{_id:id},{isActive: true}]});
        if(!task){
            return res.status(404).json({message:"no se encontro la Tarea"});
        }

        const userIDComparar=idUser.toString();
        const taskIDComparar=task.idUser.toString();
        
        if(!(userIDComparar===taskIDComparar)){
            return res.status(404).json({
                message:"No tiene permiso para realizar esta acción"
            });
        }

        await task.updateOne({
            isActive: false
        });
        return res.json({
            message:"Tarea Eliminada"});
    } catch (error) {
        return res.json({message:"no se pudo eliminar la Tarea"})
    }
}

module.exports=ctrlTask;