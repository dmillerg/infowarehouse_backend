import "reflect-metadata"
import { DataSource } from "typeorm"
import { Factura } from "./entity/facturas.entity"
import { Factura_Producto } from "./entity/facturas_productos.entity"
import { Historial_Tarjeta_Estiba } from "./entity/historial_tarjeta_estiba.entity"
import { Informe_Recepcion } from "./entity/informe_recepcion.entity"
import { Producto } from "./entity/producto.entity"
import { Tarjeta_Estiba } from "./entity/tarjeta_estiba.entity"
import { Token } from "./entity/token.entity"
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
