const rutas=require('express').Router();
const validarToken=require('../middlewares/validateJWT');
const admin=require('../middlewares/isAdmin');
const { 
    getUsers,
    getUser,
    postUser,
    putUser,
    deleteUser,
} = require('../controllers/user-ctrl');

rutas.get("/users",[validarToken,admin],getUsers);
rutas.get("/users/:idUser",[validarToken],getUser);
rutas.post("/users",postUser);
rutas.put("/users/:idUser",[validarToken],putUser);
rutas.delete("/users/:idUser",[validarToken],deleteUser);

module.exports=rutas;