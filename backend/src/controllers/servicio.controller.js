const servicioCtrl  = {};
const Servicio = require('../models/servicio')
servicioCtrl.getServicios = async (req, res) => {
    const servicios = await Servicio.find()
    res.json(servicios);
}


servicioCtrl.createServicio = async (req, res) => {
    const servicio = new Servicio(req.body)
    await servicio.save();
    res.json({
        'status': 'Servicio guardado con éxito'
    });
}

servicioCtrl.getServicio = async(req, res)=>{
    const servicio = await Servicio.findById(req.params.id);
    res.json(servicio)

}

servicioCtrl.editServicio = async(req, res) =>{ 
    const { id } = req.params;
    const servicio = {
        nombre: req.body.nombre,
        estado: req.body.estado
    };
    await Servicio.findByIdAndUpdate(id, {$set: servicio}, {new:true});
    res.json({status: 'Servicio Actualizado'});

};

servicioCtrl.deleteServicio = async (req, res) => {
    await Servicio.findByIdAndRemove(req.params.id);
    res.json({status: 'Servicio Eliminado'});
};

module.exports= servicioCtrl;