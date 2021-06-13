const clienteCtrl  = {};
const Cliente = require('../models/cliente')
clienteCtrl.getClientes = async (req, res) => {
    const clientes = await Cliente.find()
    res.json(clientes);
}


clienteCtrl.createCliente = async (req, res) => {
    const cliente = new Cliente(req.body)
    await cliente.save();
    res.json({
        'status': 'Cliente guardado con éxito'
    });
}

clienteCtrl.getCliente = async(req, res)=>{
    const cliente = await Cliente.findById(req.params.id);
    res.json(cliente)

}

clienteCtrl.editCliente = async(req, res) =>{ 
    const { id } = req.params;
    const cliente = {
        nombre: req.body.nombre,
        correo: req.body.correo,
        estado: req.body.estado,
        numero : req.body.numero,
        usuario : req.body.usuario,
        contraseña: req.body.contraseña,
        morosidad : req.body.morosidad,
        saldo : req.body.saldo
    };
    await Cliente.findByIdAndUpdate(id, {$set: cliente}, {new:true});
    res.json({status: 'Cliente Actualizado'});

};

clienteCtrl.deleteCliente = async (req, res) => {
    await Cliente.findByIdAndRemove(req.params.id);
    res.json({status: 'Cliente Eliminado'});
};

module.exports= clienteCtrl;