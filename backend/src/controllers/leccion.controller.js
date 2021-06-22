const leccionCtrl  = {};
const Leccion = require('../models/leccion')



leccionCtrl.getLecciones = async (req, res) => {
    const lecciones = await Leccion.find({})
            .populate({path: 'clientes', model: 'Cliente'})
            .populate({path: 'instructor', model: 'Instructor'});
    res.json(lecciones);
}


leccionCtrl.createLeccion = async (req, res) => {
    const leccion = new Leccion(req.body)
    await leccion.save();
    res.json({
        'status': 'Leccion guardada con éxito'
    });
}

leccionCtrl.getLeccion = async(req, res)=>{
    const leccion = await Leccion.findById(req.params.id);
    res.json(leccion)

}

leccionCtrl.editLeccion = async(req, res) =>{ 
    const { id } = req.params;
    const leccion = {
        
        clase: req.body.clase,
        instructor: req.body.instructor,
        dia:  req.body.dia,
        hora : req.body.hora,
        duracion : req.body.duracion,
        clientes : req.body.clientes
    };
    await Leccion.findByIdAndUpdate(id, {$set: leccion}, {new:true});
    res.json({status: 'Leccion Actualizada'});

};

leccionCtrl.deleteLeccion = async (req, res) => {
    await Leccion.findByIdAndRemove(req.params.id);
    res.json({status: 'Leccion Eliminada'});
};

module.exports= leccionCtrl;