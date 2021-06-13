const express = require('express');
const router = express.Router();

const leccion = require('../controllers/leccion.controller');

router.get('/', leccion.getLecciones);
router.post('/', leccion.createLeccion);
router.get('/:id', leccion.getLeccion);
router.put('/:id', leccion.editLeccion );
router.delete('/:id', leccion.deleteLeccion);


module.exports = router;