const mongoose = require('mongoose');
const {Schema }= mongoose;

const SchemaPago = new Schema({
    cliente: {type: mongoose.Schema.Types.ObjectId, ref: 'Cliente', required : false},
    pediente: { type: String, required : true},
    tipoPago :{ type: String,required: true},
    monto :{type: String, required: true}

});

module.exports = mongoose.model('Pago', SchemaPago);