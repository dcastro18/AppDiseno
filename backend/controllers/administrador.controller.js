const administradorCtrl  = {};
const Administrador = require('../models/administrador')
administradorCtrl.getAdministradores = async (req, res) => {
    const administradores = await Administrador.find()
    res.json(administradores);
}


administradorCtrl.createAdministrador = async (req, res) => {
    const administrador = new Administrador(req.body)
    await administrador.save();
    res.json({
        'status': 'Administrador guardado con éxito'
    });
}

administradorCtrl.getAdministrador = async(req, res)=>{
    const administrador = await Administrador.findById(req.params.id);
    res.json(administrador)

}

administradorCtrl.editAdministrador = async(req, res) =>{ 
    const { id } = req.params;
    const administrador = {
        nombre: req.body.nombre,
        
    };
    await Administrador.findByIdAndUpdate(id, {$set: administrador}, {new:true});
    res.json({status: 'Administrador Actualizado'});

};

administradorCtrl.deleteAdministrador = async (req, res) => {
    await Administrador.findByIdAndRemove(req.params.id);
    res.json({status: 'Administrador Eliminado'});
};

module.exports= administradorCtrl;