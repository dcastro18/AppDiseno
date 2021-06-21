const mongoose = require('mongoose');
const {Schema }= mongoose;

const SchemaCliente = new Schema({
    nombre: { type: String , required : true},
    correo: {type: String , required : true},
    estado: { type: Boolean, required : true},
    numero :{ type: Number,required: true},
    usuario :{type: String, required: true},
    contraseña: { type: String, required : true},
    morosidad :{ type: Number,required: true},
    saldo :{type: Number, required: true},
    lecciones: {type: mongoose.Schema.Types.ObjectId, ref: 'Leccion', required : false}
});

module.exports = mongoose.model('Cliente', SchemaCliente);