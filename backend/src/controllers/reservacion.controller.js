const reservacionCtrl  = {};
const Reservacion = require('../models/reservacion')
reservacionCtrl.getReservaciones = async (req, res) => {
    const reservaciones = await Reservacion.find()
    res.json(reservaciones);
}


reservacionCtrl.createReservacion = async (req, res) => {
    const reservacion = new Reservacion(req.body)
    await reservacion.save();
    res.json({
        'status': 'Reservacion guardado con éxito'
    });
}

reservacionCtrl.getReservacion = async(req, res)=>{
    const reservacion = await Reservacion.findById(req.params.id);
    res.json(reservacion)

}

reservacionCtrl.editReservacion = async(req, res) =>{ 
    const { id } = req.params;
    const reservacion = {
        costo: req.body.costo,
        idCliente: req.body.idCliente,
        idLeccion: req.body.idLeccion,
    };
    await Reservacion.findByIdAndUpdate(id, {$set: reservacion}, {new:true});
    res.json({status: 'Reservacion Actualizado'});

};

reservacionCtrl.deleteReservacion = async (req, res) => {
    await Reservacion.findByIdAndRemove(req.params.id);
    res.json({status: 'Reservacion Eliminado'});
};

module.exports= reservacionCtrl;