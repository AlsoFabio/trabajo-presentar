// importando las librerias
const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
require('dotenv').config();

// connecion a la bd
const dbConnection = require('./src/db/connection');
dbConnection();

// inicializacion de server express
const app = express();

// configuracion de variables de entorno
const port = 4000;

// middlewares
app.use(cors());
app.use(morgan('combined'));
app.use(express.json());
// rutas

app.listen(port, console.log(`Conectado a : http//localhost:${port}`));