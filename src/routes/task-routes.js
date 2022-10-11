const rutas = require('express').Router();

const {
    getTasks,
    getTask,
    postTask,
    putTask,
    deleteTask,
} = require('../controllers/task.ctrl');

rutas.get('/tasks', getTasks);
rutas.get('/tasks/:idTask', getTask);
rutas.post('/tasks', postTask);
rutas.put('/tasks/:idTask', putTask);
rutas.delete('/tasks/:idTask', deleteTask);

module.exports = rutas;