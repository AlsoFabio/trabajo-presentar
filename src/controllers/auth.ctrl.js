const modeloUser = require('../models/user-model');
const generadorJWT = require('../helper/generador-jwt');
const bcrypt = require('bcrypt');
const generarJWT = require('../helper/generador-jwt');

const ctrlAuth = {};

ctrlAuth.iniciarSesion = async(req,res)=>{
    const {name, password}=req.body;

    try {
        const user = await modeloUser.findOne({ name });
        if(!user){
            return res.status(400).json({
                ok: false,
                msg: 'Error al autenticarse' - 'Usuario no encontrado'
            });
        }

        if(!user.isActive) {
            return res.status(400).json({
                ok:false,
                msg: 'Error al autenticarse' - 'Usuario inactivo'
            });
        }

        const validarPassword= bcrypt.compareSync(password, user.password);

        if(!validarPassword){
            return res.status(400).json({
                ok: false,
                msg: 'Error al autenticarse' - 'Contraseña incorrecta'
            });
        }

        const token = await generarJWT({ uid: user._id })

        return res.json({token});
    } catch (error) {
        return res.json({ msg: 'Error al iniciar sesión'});
    }
};

module.exports=ctrlAuth;