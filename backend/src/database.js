require('custom-env').env()
const mongoose = require('mongoose');
const MongoClient = require('mongodb').MongoClient;



const URI = process.env.DB_CONNECTION;
const client = new MongoClient(URI, { useNewUrlParser: true, useUnifiedTopology: true });
mongoose.connect(URI)
      .then(db => console.log('La Base de Datos está conectada'))
      .catch(err => console.error(err));
    

module.exports = mongoose;
