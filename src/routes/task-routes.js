const rutas = require('express').Router();
const validarToken=require('../middlewares/validateJWT')
const {
    getTasks,
    getTask,
    getTaskUser,
    postTask,
    putTask,
    putTaskComplete,
    deleteTask,
} = require('../controllers/task.ctrl');

rutas.get('/tasks', getTasks);
rutas.get('/tasks/misTareas',[validarToken], getTaskUser);
rutas.get('/tasks/:idTask',[validarToken], getTask);

rutas.post('/tasks',[validarToken], postTask);

rutas.put('/tasks/:idTask',[validarToken], putTask);
rutas.put('/tasks/completar/:idTask',[validarToken], putTaskComplete);

rutas.delete('/tasks/eliminar/:idTask',[validarToken], deleteTask);

module.exports = rutas;