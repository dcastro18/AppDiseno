const mongoose = require('mongoose');

const URI = 'mongodb://localhost/mean-crud';
mongoose.connect(URI)
      .then(db => console.log('La Base de Datos está conectada'))
      .catch(err => console.error(err));
    

module.exports = mongoose;
