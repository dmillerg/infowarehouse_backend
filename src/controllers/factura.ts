import { Router, Request, Response } from 'express'
import { AppDataSource } from '../data-source';
import { Factura } from '../entity/facturas.entity';
import { Token } from '../entity/token.entity';
const bcrypt = require("bcrypt");

export class FacturaController {
  public router: Router;

  constructor() {
    this.router = Router();
    this.routes();
  }

  public getFactura = async (req: Request, res: Response) => {
    const token = req.query.token;
    const valid: any = await AppDataSource.manager.find(Token, { where: { token: token } });
    if (valid.length > 0) {
      return res.status(200).send(await AppDataSource.manager.find(Factura));
    }
    return res.status(401).send({ message: 'Usted no tiene acceso a este componente' });
  }

  public deleteFactura = async (req: Request, res: Response) => {
    const token = req.query.token;
    const valid: any = await AppDataSource.manager.find(Token, { where: { token: token } });
    if (valid.length > 0) {
      const fact = await AppDataSource.manager.find(Factura, { where: { codigo: req.params.codigo } });
      return res.status(200).send(await AppDataSource.manager.remove(Factura, fact));
    }
    return res.status(401).send({ message: 'Usted no tiene acceso a este componente' });
  }

  public saveFactura = async (req: Request, res: Response) => {
    const token = req.body.token;
    console.log('factura', req.body);
    const valid: any = await AppDataSource.manager.find(Token, { where: { token: token } });
    if (valid.length > 0) {
      const empresa = req.body.empresa;
      const fecha = new Date();
      const codigo = req.body.codigo;
      const no_factura = req.body.no_factura;
      const entregado = req.body.entregado_por;
      const facturado = req.body.facturado_por;
      const importe = req.body.importe;
      const almacen = req.body.almacen;
      const entidad = req.body.entidad_suministradora;

      if (await (await AppDataSource.manager.find(Factura, { where: { codigo: codigo } })).length == 0) {
        const factura = new Factura();
        factura.empresa = empresa;
        // factura.fecha = fecha.toDateString();
        factura.codigo = codigo;
        factura.no_factura = no_factura;
        factura.entregado_por = entregado;
        factura.facturado_por = facturado;
        factura.importe = importe;
        factura.almacen = almacen;
        factura.entidad_suministradora = entidad;
        await AppDataSource.manager.save(Factura, factura);
        return res.status(200).send({ message: 'Factura agregada correctamente' });
      }
      return res.status(400).send({ message: 'La factura ya fue creada' });
    }
    return res.status(401).send({ message: 'Usted no tiene acceso a este componente' });
  }

  public routes() {
    this.router.get('/factura', this.getFactura);
    this.router.delete('/factura/:codigo', this.deleteFactura);
    this.router.post('/factura', this.saveFactura);
  }
}
