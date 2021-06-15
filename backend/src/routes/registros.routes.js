const express = require('express');
const router = express.Router();

const registro = require('../controllers/registro.controller');

router.get('/', registro.getRegistros);
router.post('/', registro.createRegistro);
router.get('/:id', registro.getRegistro);
router.put('/:id', registro.editRegistro );
router.delete('/:id', registro.deleteRegistro);


module.exports = router;