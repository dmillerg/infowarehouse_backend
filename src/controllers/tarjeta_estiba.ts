import { Router, Request, Response } from 'express'
import { AppDataSource } from '../data-source';
import { Producto } from '../entity/producto.entity';
import { Tarjeta_Estiba } from '../entity/tarjeta_estiba.entity';
import { Token } from '../entity/token.entity';

export class TarjetaEstibaController {
  public router: Router;

  constructor() {
    this.router = Router();
    this.routes();
  }

  public getTarjetaEstiba = async (req: Request, res: Response) => {
    const token = req.query.token;
    const valid: any = await AppDataSource.manager.find(Token, { where: { token: token } });
    if (valid.length > 0) {
      return res.status(200).send(await AppDataSource.manager.find(Tarjeta_Estiba));
    }
    return res.status(401).send({ message: 'Usted no tiene acceso a este componente' });
  }

  public saveTarjetaEstiba = async (req: Request, res: Response) => {
    const token = req.query.token;
    console.log('tarjeta estiba', req.body);
    const valid: any = await AppDataSource.manager.find(Token, { where: { token: token } });
    if (valid.length > 0) {
      const codigo = req.body.codigo;
      const producto_generico = req.body.producto_generico;
      const producto_especifico = req.body.producto_especifico;
      const precio_unitario = req.body.precio_unitario;
      if (await (await AppDataSource.manager.find(Tarjeta_Estiba, { where: { codigo: codigo } })).length == 0) {
        const te = new Tarjeta_Estiba();
        te.codigo = codigo;
        te.producto_generico = producto_generico;
        te.producto_especifico = producto_especifico;
        te.precio_unitario = precio_unitario;
        await AppDataSource.manager.save(Tarjeta_Estiba, te);
        return res.status(200).send({ message: 'Informe de Recepcion guardado correctamente' });
      }
      return res.status(400).send({ message: 'Ya existe una tarejta con ese codigo' });
    }
    return res.status(401).send({ message: 'Usted no tiene acceso a este componente' });
  }

  public deleteTarjetaEstiba = async (req: Request, res: Response) => {
    const token = req.query.token;
    const valid: any = await AppDataSource.manager.find(Token, { where: { token: token } });
    if (valid.length > 0) {
      const delet = await AppDataSource.manager.find(Tarjeta_Estiba, { where: { codigo: req.params.codigo } });
      return res.status(200).send({ tarjeta_eliminada: await AppDataSource.manager.remove(Tarjeta_Estiba, delet) });
    }
    return res.status(401).send({ message: 'Usted no tiene acceso a este componente' });
  }

  public getTarjetaEstibaByCodigo = async (req: Request, res: Response) => {
    const token = req.query.token;
    const codigo = req.query.codigo;
    const valid: any = await AppDataSource.manager.find(Token, { where: { token: token } });
    if (valid.length > 0) {
      return res.status(200).send(await AppDataSource.manager.find(Tarjeta_Estiba, {where: {codigo: codigo}}));
    }
    return res.status(401).send({ message: 'Usted no tiene acceso a este componente' });
  }

  public routes() {
    this.router.get('/tarjetaestiba', this.getTarjetaEstiba);
    this.router.post('/tarjetaestiba', this.saveTarjetaEstiba);
    this.router.delete('/tarjetaestiba', this.deleteTarjetaEstiba);
    this.router.get('/tarjetaestiba/:codigo', this.getTarjetaEstibaByCodigo);
  }
}
