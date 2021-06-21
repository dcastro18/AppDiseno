const mongoose = require('mongoose');
const {Schema }= mongoose;

const SchemaReservacion= new Schema({
    costo: { type: String , required : true},
    cliente: {type: mongoose.Schema.Types.ObjectId, ref: 'Cliente', required : false},
    leccion: {type: mongoose.Schema.Types.ObjectId, ref: 'Leccion', required : false}
});

module.exports = mongoose.model('Reservacion', SchemaReservacion);