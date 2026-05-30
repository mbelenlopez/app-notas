const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());

mongoose.connect('TU_URI_MONGO');

app.use('/notas', require('./Routers/notasRouter'));

app.listen(3000, () => console.log('Servidor en 3000'));