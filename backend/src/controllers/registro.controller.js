const registroCtrl  = {};
const Registro = require('../models/registro')
registroCtrl.getRegistros = async (req, res) => {
    const registros = await Registro.find()
    res.json(registros);
}


registroCtrl.createRegistro = async (req, res) => {
    const registro = new Registro(req.body)
    await registro.save();
    res.json({
        'status': 'Registro guardado con éxito'
    });
}

registroCtrl.getRegistro = async(req, res)=>{
    const registro = await Registro.findById(req.params.id);
    res.json(registro)

}

registroCtrl.editRegistro = async(req, res) =>{ 
    const { id } = req.params;
    const registro = {
        nombre: req.body.nombre,
        accion: req.body.accion,
        fecha: req.body.fecha,
        hora : req.body.hora,
        horaSalida : req.body.horaSalida
    };
    await Registro.findByIdAndUpdate(id, {$set: registro}, {new:true});
    res.json({status: 'Registro Actualizado'});

};

registroCtrl.deleteRegistro = async (req, res) => {
    await Registro.findByIdAndRemove(req.params.id);
    res.json({status: 'Registro Eliminado'});
};

module.exports= registroCtrl;