const mongoose = require('mongoose');
const {Schema }= mongoose;

const SchemaLeccion = new Schema({
    clase: {type: mongoose.Schema.Types.ObjectId, ref: 'Servicio', required : false},
    instructor: {type: mongoose.Schema.Types.ObjectId, ref: 'Instructor', required : false},
    fechaHora: { type: Date , required : true},
    duracion :{type: String, required: true},
    clientes: [mongoose.Schema.Types.ObjectId]

});
module.exports = mongoose.model('Leccion', SchemaLeccion);