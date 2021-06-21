const mongoose = require('mongoose');
const {Schema }= mongoose;

const SchemaInstructor = new Schema({
    nombre: { type: String , required : true},
    correo: {type: String , required : true},
    especialidades: [mongoose.Schema.Types.ObjectId],
    numero :{ type: Number,required: true},
    tipo :{type: String, required: true}

});

module.exports = mongoose.model('Instructor', SchemaInstructor);