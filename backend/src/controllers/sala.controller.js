const salaCtrl  = {};
const Sala = require('../models/sala')
salaCtrl.getSalas = async (req, res) => {
    const salas = await Sala.find()
    res.json(salas);
}


salaCtrl.createSala = async (req, res) => {
    const sala = new Sala(req.body)
    await sala.save();
    res.json({
        'status': 'Sala guardado con éxito'
    });
}

salaCtrl.getSala = async(req, res)=>{
    const sala = await Sala.findById(req.params.id);
    res.json(sala)

}

salaCtrl.editSala = async(req, res) =>{ 
    const { id } = req.params;
    const sala = {
        capacidad: req.body.capacidad,
        aforo: req.body.aforo,
        listaLecciones: req.body.listaLecciones,
    };
    await Sala.findByIdAndUpdate(id, {$set: sala}, {new:true});
    res.json({status: 'Sala Actualizado'});

};

salaCtrl.deleteSala = async (req, res) => {
    await Sala.findByIdAndRemove(req.params.id);
    res.json({status: 'Sala Eliminado'});
};

module.exports= salaCtrl;