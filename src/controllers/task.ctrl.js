const modeloTask = require('../models/task-model');
const ctrlTask = {};

// GET tareas
ctrlTask.getTasks=async(req,res)=>{
    try {
        const task = await modeloTask.find({isActive: true});
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
        const task = await modeloTask.findOne({$and:[{_id:id},{isActive: true}]});
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

// POST tareas
ctrlTask.postTask=async(req,res)=>{
    try {
        const {title,description} = req.body

        const task = new modeloTask({
            title,
            description
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
    const id = req.params.idTask;
    const {title,description} = req.body;
    if(!title || !description){
        return res.json({message:"Campos vacios"});
    }
    const task = await modeloTask.findOne({$and:[{_id:id},{isActive: true}]});
    if(task){
        await task.updateOne({
            title,
            description
        });
        return res.json({
            message:"Tarea Actualizada"});
    }
} catch (error) {
    return res.json({message:"no se pudo actualizar la Tarea"})
}
   
}

// DELETE tareas
ctrlTask.deleteTask=async(req,res)=>{
    try {
        const id = req.params.idTask;
        const task = await modeloTask.findOne({$and:[{_id:id},{isActive: true}]});
        if(task){
            await task.updateOne({
                isActive: false
            });
            return res.json({
                message:"Tarea Eliminada"});
        }
    } catch (error) {
        return res.json({message:"no se pudo eliminar la Tarea"})
    }
}

module.exports=ctrlTask;