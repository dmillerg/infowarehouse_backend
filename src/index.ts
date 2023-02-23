import { FacturaController } from "./controllers/factura";
import { FacturaProductoController } from "./controllers/factura_producto";
import { HistorialTarjetaEstibaController } from "./controllers/historial_tarjeta_estiba";
import { InformeController } from "./controllers/informe";
import { LoginController } from "./controllers/login";
import { ProductoController } from "./controllers/producto";
import { TarjetaEstibaController } from "./controllers/tarjeta_estiba";
import { UsuarioController } from "./controllers/usuarios";
import { AppDataSource } from "./data-source"
import { Usuario } from "./entity/usuarios.entity"
/**** */
const express = require('express')
const bodyParser = require('body-parser');
const cors = require('cors');
const fileUpload = require('express-fileupload');

const app = express();
const port = 9706;

AppDataSource.initialize().then(async () => {

    app.use(cors());

    // Configuring body parser middlewares
    app.use(bodyParser.urlencoded({ extended: false }));
    app.use(bodyParser.json());

    // Configuracion para subir imagenes
    app.use(fileUpload());

    // Importamos las rutas
    var routes = require('./url/url');
    const inicio = require('./controllers/apis');
    const user_controller = new UsuarioController();
    const informe_controller = new InformeController();
    const login_controller = new LoginController();
    const factura_controller = new FacturaController();
    const factura_producto_controller = new FacturaProductoController();
    const producto_controller = new ProductoController();
    const tarjeta_estiba_controller = new TarjetaEstibaController();
    const historial_tarjeta_estiba_controller = new HistorialTarjetaEstibaController();

    // Cargamos las rutas
    app.use('/apis', user_controller.router);
    app.use('/apis', informe_controller.router);
    app.use('/apis', login_controller.router);
    app.use('/apis', factura_controller.router);
    app.use('/apis', factura_producto_controller.router);
    app.use('/apis', producto_controller.router);
    app.use('/apis', tarjeta_estiba_controller.router);
    app.use('/apis', historial_tarjeta_estiba_controller.router);
    app.get('/apis', inicio.getApis);

    module.exports = app;

    // console.log("Inserting a new user into the database...")
    // const user = new Usuario()
    // user.usuario = "Timber"
    // user.nombre = "Saw"
    // user.ultima_session = "25"
    // await AppDataSource.manager.save(user)
    // console.log("Saved a new user with id: " + user.id)

    // console.log("Loading users from the database...")
    // const users = await AppDataSource.manager.find(Usuario)
    // console.log("Loaded users: ", users)

    // console.log("Here you can setup and run express / fastify / any other framework.")
    console.log('Conexion con la DB SUCCESSFULL');
    
    app.listen(port, () => console.log(`El servidor esta escuchando en el puerto ${port}!`));

}).catch(error => console.log(error))