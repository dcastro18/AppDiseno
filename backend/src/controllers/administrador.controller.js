const administradorCtrl  = {};
const Administrador = require('../models/administrador');
const Instructores = require('../models/instructor');
const Clientes = require('../models/cliente');
const Leccion = require('../models/leccion');

administradorCtrl.getAdministradores = async (req, res) => {
    const administradores = await Administrador.find()
    res.json(administradores);
}

administradorCtrl.getInstructores = async (req, res) => {

    try {
        const instructores = await Instructores.find();
        res.status(202).send(instructores);
    } catch (err) {
        res.status(500).json(
            { 
              message : 'the request failed', 
              error: err
            }
        );
    }   
}

administradorCtrl.getClientes = async (req, res) => {

    try {
        const clientes = await Clientes.find();
        res.status(202).send(clientes);
    } catch (err) {
        res.status(500).json(
            { 
              message : 'the request failed', 
              error: err
            }
        );
    }   
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



// administradorCtrl.getLecciones = async (req, res) => {

//     const lecciones = await Leccion.find();
//     res.json(lecciones);
// }

module.exports= administradorCtrl;