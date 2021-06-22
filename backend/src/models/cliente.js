const mongoose = require('mongoose');
const {Schema }= mongoose;

const SchemaCliente = new Schema({
    nombre: { type: String , required : true},
    correo: {type: String , required : true},
    estado: { type: Boolean, required : false},
    numero :{ type: Number,required: true},
    usuario :{type: String, required: true},
    contraseña: { type: String, required : true},
    morosidad :{ type: Number,required: true},
    saldo :{type: Number, required: false}
});

module.exports = mongoose.model('Cliente', SchemaCliente);