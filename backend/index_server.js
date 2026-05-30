const express = require('express');
const cors = require('cors');
require('dotenv').config();
const conectarDB = require('./database/conexion');
const app = express();

app.use(cors({ origin: 'http://localhost:4200' }));
app.use(express.json());
conectarDB();

app.use('/api/notas', require('./Routers/notasRouter'));

app.listen(3000, () => console.log('Servidor en http://localhost:3000'));
