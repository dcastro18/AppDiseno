const mongoose = require('mongoose');
const {Schema }= mongoose;

const SchemaLeccion = new Schema({
    clase: { type: String , required : true},
    instructor: {type: String , required : true},
    dia: { type: String , required : true},
    hora :{ type: String, required: true},
    duracion :{type: String, required: true},
    clientes :{type: Array, required: true}

});

module.exports = mongoose.model('Lección', SchemaLeccion);