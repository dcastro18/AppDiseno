const mongoose = require('mongoose');
const {Schema }= mongoose;

const SchemaServicio= new Schema({
    nombre: { type: String , required : true},
    estado: {type: Boolean , required : true},
    clientes: [mongoose.Schema.Types.ObjectId]
});

module.exports = mongoose.model('Servicio', SchemaServicio);