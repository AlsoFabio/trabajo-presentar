const rutas=require('express').Router();
const{
    iniciarSesion
} = require('../controllers/auth.ctrl');

rutas.post('/login', iniciarSesion);

module.exports=rutas;