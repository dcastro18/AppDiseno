const mongoose = require('mongoose');
const {Schema }= mongoose;

const SchemaReservacion= new Schema({
    costo: { type: String , required : true},
    idCliente: {type: String , required : true},
    idLeccion: { type: String , required : true}
});

module.exports = mongoose.model('Reservacion', SchemaReservacion);