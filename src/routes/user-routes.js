const rutas=require('express').Router();
const { 
    getUsers,
    getUser,
    postUser,
    putUser,
    deleteUser,
} = require('../controllers/user-ctrl');

rutas.get("/users",getUsers);
rutas.get("/users/:idUser",getUser);
rutas.post("/users",postUser);
rutas.put("/users/:idUser",putUser);
rutas.delete("/users/:idUser",deleteUser);

module.exports=rutas;