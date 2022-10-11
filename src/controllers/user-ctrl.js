const modelUser = require('../models/user-model');
const bcrypt = require('bcrypt');

const ctrlUser={};

// GET usuarios
ctrlUser.getUsers=async(req,res)=>{
    try {
        const users = await modelUser.find({isActive:true});

        return res.json({
            message:`Usuarios encontrados ${users.length}`,
            users
        })
    } catch (error) {
        return res.json({
            message:`No se pudo getall`
        })
    }
}

// GET usuario
ctrlUser.getUser=async(req,res)=>{
    try {
        const id = req.params.idUser;
        const user = await modelUser.findOne({$and:[{_id:id},{isActive:true}]});
        if(!user){return res.json({
            message:"Usuarios no encontrado",
        })}
        if(user){
            return res.json({
                message:"Usuarios encontrado",
                user
            })
        }
    } catch (error) {
        return res.json({
            message:`No se pudo get1`
        })
    }
}

// POST usuario
ctrlUser.postUser=async(req,res)=>{
    try {
        const {name,password,email} = req.body;
        const newPassword = bcrypt.hashSync(password,10);
        
        const newUser = new modelUser({
            name,
            password:newPassword,
            email,
        })
        await newUser.save();
        return res.json({message:"Usuario Generado"});
    } catch (error) {
        return res.json({
            message:`No se pudo post`
        })
    }
}

// PUT usuario 
ctrlUser.putUser=async(req,res)=>{
    try {
        const id = req.params.idUser;
        const {name,password,email} = req.body;
        if(!id || !name || !password || !email){
            return res.json({message:"campos vacios"})
        }

        const user = await modelUser.findOne({$and:[{_id:id},{isActive:true}]});
        if(user){
            const newPassword = bcrypt.hashSync(password,10);
            await user.updateOne({
                name,
                password:newPassword,
                email,
            })
            return res.json({message:"datos actualizados"})
        }
    } catch (error) {
        return res.json({
            message:`No se pudo put`
        })
    }
}

// delete usuario
ctrlUser.deleteUser=async(req,res)=>{
    try {
        const id = req.params.idUser;
        const user = await modelUser.findOne({$and:[{_id:id},{isActive:true}]});
            await user.updateOne({
                isActive:false
            })
            return res.json({message:"usuario muerto"})
    } catch (error) {
        return res.json({
            message:`No se pudo delete`
        })
    }
}

module.exports=ctrlUser;