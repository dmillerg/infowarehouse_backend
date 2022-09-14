import { Router, Request, Response } from 'express'
import { AppDataSource } from '../data-source';
import { Factura_Producto } from '../entity/facturas_productos.entity';
import { Producto } from '../entity/producto.entity';
import { Token } from '../entity/token.entity';
const bcrypt = require("bcrypt");

export class FacturaProductoController {
  public router: Router;

  constructor() {
    this.router = Router();
    this.routes();
  }

  public getFacturaProducto = async (req: Request, res: Response) => {
    const token = req.query.token;
    const valid: any = await AppDataSource.manager.find(Token, { where: { token: token } });
    if (valid.length > 0) {
      const fp = await AppDataSource.manager.createQueryBuilder(Producto, 'prod')
        .select('prod.*')
        .addSelect('fp.cantidad as cantidad')
        .innerJoin(Factura_Producto, 'fp', 'prod.codigo = fp.codigo_producto')
        .where(`fp.no_factura=${req.query.no_factura}`)
        .getRawMany();
      return res.status(200).send(fp);

    }
    return res.status(401).send({ message: 'Usted no tiene acceso a este componente' });
  }

  public saveFacturaProducto = async (req: Request, res: Response) => {
    const token = req.body.token;
    const valid: any = await AppDataSource.manager.find(Token, { where: { token: token } });
    if (valid.length > 0) {
      const no_factura = req.body.no_factura;
      const codigo_producto = req.body.codigo_producto;
      const cantidad = req.body.cantidad;
      const fp = new Factura_Producto();
      fp.no_factura = no_factura;
      fp.cantidad = cantidad;
      fp.codigo_producto = codigo_producto;
      await AppDataSource.manager.save(Factura_Producto, fp);
      return res.status(200).send({message: 'Factura producto creada satisfactoriamente'});
    }
    return res.status(401).send({ message: 'Usted no tiene acceso a este componente' });
  }

  public routes() {
    this.router.get('/facturaproducto', this.getFacturaProducto);
    this.router.post('/facturaproducto', this.saveFacturaProducto);
  }
}
