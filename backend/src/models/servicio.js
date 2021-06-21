const mongoose = require('mongoose');
const {Schema }= mongoose;

const SchemaServicio= new Schema({
    nombre: { type: String , required : true},
    estado: {type: Boolean , required : true}
});

module.exports = mongoose.model('Servicio', SchemaServicio);