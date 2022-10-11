const jwt = require('jsonwebtoken');

const generarJWT = (uid)=>{
    return new Promise((resolve,reject)=>{
        jwt.sign(uid,process.env.SECRET_WORD, {
            expiresIN: '5h'
        },(err,token)=>{
            if(err){
                reject('No se pudo generar el token');
            }
            resolve(token);
        })
    })
}

module.exports=generarJWT;