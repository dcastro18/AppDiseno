const express = require('express');
const router = express.Router();

const administrador = require('../controllers/administrador.controller');

router.get('/', administrador.getAdministradores);
router.post('/', administrador.createAdministrador);
router.get('/:id', administrador.getAdministrador);
router.put('/:id', administrador.editAdministrador );
router.delete('/:id', administrador.deleteAdministrador);


module.exports = router;