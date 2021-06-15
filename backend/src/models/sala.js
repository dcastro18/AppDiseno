const mongoose = require('mongoose');
const {Schema }= mongoose;

const SchemaSala= new Schema({
    capacidad: { type: String , required : true},
    aforo: {type: String , required : true},
    listaLecciones: { type: String , required : true}
});

module.exports = mongoose.model('Sala', SchemaSala);