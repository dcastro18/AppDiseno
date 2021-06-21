const instructorCtrl  = {};
const mongoose = require('mongoose');
const { Mongoose } = require('mongoose');
const Instructor = require('../models/instructor');
const Servicio = require('../models/servicio');
instructorCtrl.getInstructores = async (req, res) => {
    const instructores = await Instructor.find()
    res.json(instructores);
}


instructorCtrl.createInstructor = async (req, res) => {
    const instructor = new Instructor(req.body)
    await instructor.save();
    res.json({
        'status': 'Instructor guardado con éxito'
    });
}

instructorCtrl.getInstructor = async(req, res)=>{
    const instructor = await Instructor.findById(req.params.id);
    res.json(instructor)

}

instructorCtrl.editInstructor = async(req, res) =>{ 
    const { id } = req.params;
    const instructor = {
        nombre: req.body.nombre,
        correo: req.body.correo,
        especialidades: req.body.especialidades,
        numero: req.body.numero,
        tipo: req.body.tipo
    };
    await Instructor.findByIdAndUpdate(id, {$set: instructor}, {new:true});
    res.json({status: 'Instructor Actualizado'});

};

instructorCtrl.deleteInstructor = async (req, res) => {
    await Instructor.findByIdAndRemove(req.params.id);
    res.json({status: 'Instructor Eliminado'});
};


//En esta funcion el intructor agrega el servicio a la lista de servicios que el/ella ofrece
instructorCtrl.daElServicio = async (req, res)=>{
    req.params.instructor = mongoose.Types.ObjectId(req.params.instructor);
    const servicio = await Servicio.findById(req.params.servicio)
    servicio.instructores = req.params.instructor;
    servicio.save();

    res.json(servicio);
}

module.exports= instructorCtrl;