const mongoose = require('mongoose');
const {Schema }= mongoose;

const SchemaAdministrador = new Schema({
    nombre: { type: String , required : true}
});

module.exports = mongoose.model('Administrador', SchemaAdministrador);