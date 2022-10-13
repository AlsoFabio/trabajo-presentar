const modeloUser=require('../models/user-model');
const jwt=require('jsonwebtoken');

const validarJWT = async(req,res,next)=> {
    let token = req.headers.authorization;
    if(!token){
        return res.status(401).json({
            msg: 'Error de autenticación - no hay token en la petición'
        })
    };

    try {
        const {uid} = await jwt.verify(token, process.env.SECRET_WORD);
        const usuario = await modeloUser.findById(uid);
        if(!usuario){
            return res.status(401).json({
                error: 'token no válido - usuario no existe en la BD'
            })
        }
        if(!usuario.isActive){
            return res.status(401).json({
                message: 'Token no válido - usuario no está activo'
            })
        }

        req.user = usuario;

        next();
    } catch (error) {
        console.log(error.message);
        res.status(401).json({
            msg: 'Error de autenticación - Token no válido'
        })
    }
}

module.exports=validarJWT