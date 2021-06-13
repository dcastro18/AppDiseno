const pagoCtrl  = {};
const Pago = require('../models/pago')
pagoCtrl.getPagos = async (req, res) => {
    const pagos = await Pago.find()
    res.json(pagos);
}


pagoCtrl.createPago = async (req, res) => {
    const pago = new Pago(req.body)
    await pago.save();
    res.json({
        'status': 'Pago guardado con éxito'
    });
}

pagoCtrl.getPago = async(req, res)=>{
    const pago = await Pago.findById(req.params.id);
    res.json(pago)

}

pagoCtrl.editPago = async(req, res) =>{ 
    const { id } = req.params;
    const pago = {
       
        cliente: req.body.cliente,
        idCliente: req.body.idCliente,
        pediente: req.body.pediente,
        tipoPago : req.body.tipoPago,
        monto : req.body.monto
    };
    await Pago.findByIdAndUpdate(id, {$set: pago}, {new:true});
    res.json({status: 'Pago Actualizado'});

};

pagoCtrl.deletePago = async (req, res) => {
    await Pago.findByIdAndRemove(req.params.id);
    res.json({status: 'Pago Eliminado'});
};

module.exports= pagoCtrl;