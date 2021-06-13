const mongoose = require('mongoose');
const {Schema }= mongoose;

const SchemaRegistro = new Schema({
    nombre: { type: String , required : true},
    accion: {type: String , required : true},
    fecha: { type: String , required : true},
    hora :{ type: String , required: true},
    horaSalida :{type: String, required: true}
    
});

module.exports = mongoose.model('Registro', SchemaRegistro);