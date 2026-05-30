const mongoose = require('mongoose');

const NotaSchema = new mongoose.Schema({
  titulo:    { type: String, required: true, trim: true },
  contenido: { type: String, required: true },
  fecha:     { type: Date, default: Date.now }
});

module.exports = mongoose.model('Nota', NotaSchema);
