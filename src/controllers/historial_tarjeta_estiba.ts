import { Router, Request, Response } from 'express'
import { AppDataSource } from '../data-source';
import { Factura } from '../entity/facturas.entity';
import { Historial_Tarjeta_Estiba } from '../entity/historial_tarjeta_estiba.entity';
import { Token } from '../entity/token.entity';
const bcrypt = require("bcrypt");

export class HistorialTarjetaEstibaController {
  public router: Router;

  constructor() {
    this.router = Router();
    this.routes();
  }

  public getHistorialTarjetaEstiba = async (req: Request, res: Response) => {
    const token = req.query.token;
    const valid: any = await AppDataSource.manager.find(Token, { where: { token: token } });
    if (valid.length > 0) {
      return res.status(200).send(await AppDataSource.manager.find(Historial_Tarjeta_Estiba));
    }
    return res.status(401).send({ message: 'Usted no tiene acceso a este componente' });
  }

  public getHistorialTarjetaEstibaByCodigo = async (req: Request, res: Response) => {
    const token = req.query.token;
    const valid: any = await AppDataSource.manager.find(Token, { where: { token: token } });
    if (valid.length > 0) {
      return res.status(200).send(await AppDataSource.manager.find(Historial_Tarjeta_Estiba, {where:{codigo_estiba: req.params.codigo}}));
    }
    return res.status(401).send({ message: 'Usted no tiene acceso a este componente' });
  }

  public deleteHistorialTarjetaEstiba = async (req: Request, res: Response) => {
    const token = req.query.token;
    const valid: any = await AppDataSource.manager.find(Token, { where: { token: token } });
    if (valid.length > 0) {
      const delet = await AppDataSource.manager.find(Historial_Tarjeta_Estiba, { where: { codigo_estiba: req.params.codigo } });
      return res.status(200).send({ tarjeta_eliminada: await AppDataSource.manager.remove(Historial_Tarjeta_Estiba, delet) });
    }
    return res.status(401).send({ message: 'Usted no tiene acceso a este componente' });
  }

  public saveHistorialTarjetaEstiba = async (req: Request, res: Response) => {
    const token = req.body.token;
    const valid: any = await AppDataSource.manager.find(Token, { where: { token: token } });
    if (valid.length > 0) {
      const clave = req.body.clave;
      const no = req.body.no;
      const entrada = req.body.entrada;
      const salida = req.body.salida;
      var saldo = 0;
      const firma = req.body.firma;
      const codigo_estiba = req.body.codigo_estiba;

      const hte = await AppDataSource.manager.find(Historial_Tarjeta_Estiba);
      saldo = hte.length > 0 ? Number(hte[hte.length - 1].saldo + entrada - salida) : entrada;
      const hte_n = new Historial_Tarjeta_Estiba();

      hte_n.clave = clave;
      hte_n.no = no;
      hte_n.entrada = entrada;
      hte_n.salida = salida;
      hte_n.firma = firma;
      hte_n.saldo = saldo;
      hte_n.codigo_estiba = codigo_estiba;
      await AppDataSource.manager.save(Historial_Tarjeta_Estiba, hte_n);
      return res.status(200).send({ message: 'Historial agreegado correctamente' });

    } else {
      return res.status(401).send({ message: 'Usted no tiene acceso a este componente' });
    }
  }

  public routes() {
    this.router.get('/historialtarjetaestiba', this.getHistorialTarjetaEstiba);
    this.router.get('/historialtarjetaestiba/:codigo', this.getHistorialTarjetaEstibaByCodigo);
    this.router.delete('/historialtarjetaestiba/:codigo', this.deleteHistorialTarjetaEstiba);
    this.router.post('/historialtarjetaestiba', this.saveHistorialTarjetaEstiba);
  }
}
