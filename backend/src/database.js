const mongoose = require('mongoose');
const MongoClient = require('mongodb').MongoClient;

const URI = "mongodb+srv://usuario:123@appweb.twsbz.mongodb.net/AppWebDB?retryWrites=true&w=majority";
const client = new MongoClient(URI, { useNewUrlParser: true, useUnifiedTopology: true });
mongoose.connect(URI)
      .then(db => console.log('La Base de Datos está conectada'))
      .catch(err => console.error(err));
    

module.exports = mongoose;
