const express = require('express');
const router = express.Router();

const instructor = require('../controllers/instructor.controller');

router.get('/', instructor.getInstructores);
router.post('/', instructor.createInstructor);
router.get('/:id', instructor.getInstructor);
router.put('/:id', instructor.editInstructor );
router.delete('/:id', instructor.deleteInstructor);

router.get('/:servicio/:instructor', instructor.daElServicio);


module.exports = router;