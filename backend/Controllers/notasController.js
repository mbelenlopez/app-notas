const Nota = require('../Repositories/model/Nota');

// GET todos — Integrante 1
exports.getNotas = async (req, res) => {
  try {
    const notas = await Nota.find();
    res.json(notas);
  } catch (err) { res.status(500).json({ error: 'Error al obtener notas' }); }
};

// GET por id
exports.getNota = async (req, res) => {
  try {
    const nota = await Nota.findById(req.params.id);
    if (!nota) return res.status(404).json({ error: 'No encontrada' });
    res.json(nota);
  } catch (err) { res.status(500).json({ error: 'Error' }); }
};

// POST crear — Integrante 2
exports.crearNota = async (req, res) => {
  try {
    const nueva = new Nota(req.body);
    await nueva.save();
    res.status(201).json(nueva);
  } catch (err) { res.status(400).json({ error: err.message }); }
};

// PUT editar — Integrante 3
exports.actualizarNota = async (req, res) => {
  try {
    const nota = await Nota.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!nota) return res.status(404).json({ error: 'No encontrada' });
    res.json(nota);
  } catch (err) { res.status(500).json({ error: 'Error' }); }
};

// DELETE eliminar — Integrante 4
exports.eliminarNota = async (req, res) => {
  try {
    await Nota.findByIdAndDelete(req.params.id);
    res.json({ msg: 'Nota eliminada' });
  } catch (err) { res.status(500).json({ error: 'Error' }); }
};
