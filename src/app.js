const express = require('express'); //requiero el modulo express
const app = express(); //asigno a la cosntante app la función de alto nivel express()

const routerMain = require('./routes/main');
const routerProductos = require('./routes/productos');

app.listen(3000,() => console.log('Servidor corriendo en el puerto 3000')) //levanto el servidor

app.use('/', routerMain)

app.use('/productos',routerProductos)

