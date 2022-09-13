import { UsuarioController } from "../apis/usuarios";
// import app  from './../index'

// Cargamos el módulo de express para poder crear rutas
var express = require('express');

// Cargamos los controladores
const user_controller = new UsuarioController();
// var factura_api = require('../apis/factura');

// var managedb_api = require('../database/manageDB');
// var login_api = require('../apis/login');
// var producto_api = require('../apis/producto');
// var tarjeta_estiba_api = require('../apis/tarjeta_estiba');
// var historial_tarjeta_estiba_api = require('../apis/historial_tarjeta_estiba');
// var informe_recepcion_api = require('../apis/informe');
// var factura_producto_api = require('../apis/factura_producto');
// var superuser_api = require('../database/superuser');

// Llamamos al router
var api = express.Router();

// Rutas para las api de usuario


//Rutas para manejar base de datos
// api.get('/database', managedb_api.createTables);
// api.post('/all', managedb_api.all);
// api.get('/loadSQL', managedb_api.loadSQL);

// Rutas para login and logout
// api.post('/login', login_api.login);
// api.post('/logout', login_api.logout);

// //Rutas para Facturas
// api.get('/facturas', factura_api.getFactura);
// api.post('/facturas', factura_api.saveFactura);
// api.delete('/facturas/:codigo', factura_api.deleteFactura);

// // Rutas para productos
// api.get('/productos', producto_api.getProductos);
// api.post('/productos', producto_api.saveProductos);
// api.delete('/productos/:id', producto_api.deleteProducto);
// api.get('/productos/:id', producto_api.updateProducto);

// // Rutas para tarjetas estibas
// api.get('/tarjetas',tarjeta_estiba_api.getTarjetas);
// api.post('/tarjetas',tarjeta_estiba_api.saveTarjetaEstiba);
// api.delete('/tarjetas',tarjeta_estiba_api.deleteTarjetaEstiba);
// api.get('/tarjetas/:codigo',tarjeta_estiba_api.getTarjetaEstibaByCodigo);

// // Rutas para historial de tarjetas estiba
// api.get('/historialtarjeta/:codigo', historial_tarjeta_estiba_api.getHistorialTarjetaEstiba);
// api.post('/historialtarjeta', historial_tarjeta_estiba_api.saveHistorialTarjetaEstiba);
// api.delete('/historialtarjeta/:id', historial_tarjeta_estiba_api.deleteHistorialTarjetaEstiba);
// api.get('/historialtarjeta/:id', historial_tarjeta_estiba_api.getTarjetaEstibaByCodigo);

// // Rutas para informes
// api.get('/informe',informe_recepcion_api.getInforme)
// api.get('/informe/:anno',informe_recepcion_api.getInformeByYear)
// api.post('/informe',informe_recepcion_api.saveinforme)
// api.get('/informelastnumber',informe_recepcion_api.getLastNumber)

// // Rutas para factura producto
// api.get('/facturaproducto',factura_producto_api.getFacturaProducto)
// api.post('/facturaproducto',factura_producto_api.saveFacturaProducto)

// Exportamos la configuración
module.exports = api;