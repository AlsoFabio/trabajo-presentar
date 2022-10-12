const rutas = require('express').Router();
const validarToken=require('../middlewares/validateJWT')
const {
    getTasks,
    getTask,
    postTask,
    putTask,
    deleteTask,
} = require('../controllers/task.ctrl');

rutas.get('/tasks', getTasks);
rutas.get('/tasks/:idTask',[validarToken], getTask);
rutas.post('/tasks',[validarToken], postTask);
rutas.put('/tasks/:idTask',[validarToken], putTask);
rutas.delete('/tasks/:idTask',[validarToken], deleteTask);

module.exports = rutas;