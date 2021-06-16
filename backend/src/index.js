const express = require('express');
const morgan = require('morgan');
const app = express();

const { mongoose } = require('./database');

//Settings
app.set('port', process.env.PORT);

//Middlewares
app.use(morgan('dev'))
app.use(express.json());

//Routes
app.use('/api/administradores',require('./routes/administradores.routes'));
app.use('/api/clientes',require('./routes/clientes.routes'));
app.use('/api/instructores',require('./routes/instructores.routes'));
app.use('/api/lecciones',require('./routes/lecciones.routes'));
app.use('/api/pagos',require('./routes/pagos.routes'));
app.use('/api/registros',require('./routes/registros.routes'));
app.use('/api/reservaciones',require('./routes/reservaciones.routes'));
app.use('/api/salas',require('./routes/salas.routes'));
app.use('/api/servicios',require('./routes/servicios.routes'));

//Starting the server
app.listen(app.get('port'), () => {
    console.log('Server on port' , app.get('port'));
});