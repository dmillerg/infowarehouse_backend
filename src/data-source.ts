import "reflect-metadata"
import { DataSource } from "typeorm"
import { Factura } from "./entity/facturas"
import { Factura_Producto } from "./entity/facturas_productos"
import { Historial_Tarjeta_Estiba } from "./entity/historial_tarjeta_estiba"
import { Informe_Recepcion } from "./entity/informe_recepcion"
import { Producto } from "./entity/producto"
import { Tarjeta_Estiba } from "./entity/tarjeta_estiba"
import { Token } from "./entity/Token"
import { Usuario } from "./entity/usuarios.entity"

export const AppDataSource = new DataSource({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "root",
    password: "",
    database: "infowarehouse2",
    synchronize: true,
    logging: false,
    entities: [Usuario, Factura, Factura_Producto, Historial_Tarjeta_Estiba, Informe_Recepcion, Producto, Tarjeta_Estiba, Token], 
    migrations: [Usuario, Factura, Factura_Producto, Historial_Tarjeta_Estiba, Informe_Recepcion, Producto, Tarjeta_Estiba, Token],
    subscribers: [],
})
