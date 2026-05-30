const express = require('express');
const router = express.Router();
const controller = require('../Controllers/notasController');

router.get('/',        controller.getNotas);       // Integrante 1
router.get('/:id',     controller.getNota);
router.post('/',       controller.crearNota);      // Integrante 2
router.put('/:id',     controller.actualizarNota); // Integrante 3
router.delete('/:id',  controller.eliminarNota);   // Integrante 4

module.exports = router;
