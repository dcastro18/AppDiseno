const mongoose = require('mongoose');
const {Schema }= mongoose;

const SchemaInstructor = new Schema({
    nombre: { type: String , required : true},
    correo: {type: String , required : true},
    especialidades: { type: String, required : false},
    numero :{ type: Number,required: true},
    usuario :{type: String, required: true},
    contraseña: { type: String, required : true},
    tipo :{type: String, required: false}

});

module.exports = mongoose.model('Instructor', SchemaInstructor);