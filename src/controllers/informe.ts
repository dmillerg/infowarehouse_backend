import { Router, Request, Response } from 'express'
import { AppDataSource } from '../data-source';
import { Informe_Recepcion } from '../entity/informe_recepcion.entity';
import { Token } from '../entity/token.entity';

export class InformeController {
  public router: Router;

  constructor() {
    this.router = Router();
    this.routes();
  }

  public getInforme = async (req: Request, res: Response) => {
    const token = req.query.token;
    const valid: any = await AppDataSource.manager.find(Token, { where: { token: token } });
    if (valid.length > 0) {
      return res.status(200).send(await AppDataSource.manager.find(Informe_Recepcion));
    }
    return res.status(401).send({ message: 'Usted no tiene acceso a este componente' });
  }

  public getInformeByYear = async (req: Request, res: Response) => {
    const token = req.query.token;
    const anno = req.query.anno;
    const valid: any = await AppDataSource.manager.find(Token, { where: { token: token } });
    if (valid.length > 0) {
      return res.status(200).send(await AppDataSource.manager.find(Informe_Recepcion, { where: { anno: anno } }));
    }
    return res.status(401).send({ message: 'Usted no tiene acceso a este componente' });
  }

  public saveInforme = async (req: Request, res: Response) => {
    const token = req.query.token;
    const valid: any = await AppDataSource.manager.find(Token, { where: { token: token } });
    if (valid.length > 0) {
      const no = req.body.no;
      const empresa = req.body.empresa;
      const almacen = req.body.almacen;
      const codigo = req.body.codigo;
      const recepcionado_por = req.body.recepcionado_por;
      const entidad_suministradora = req.body.entidad_suministradora;
      const anno = req.body.anno;
      const no_anno = req.body.no_anno;
      const factura = req.body.factura;
      console.log(req.body);
      
      const ir = new Informe_Recepcion();
      ir.no = no;
      ir.empresa = empresa;
      ir.almacen = almacen;
      ir.codigo = codigo;
      ir.recepcionado_por = recepcionado_por;
      ir.entidad_suministradora = entidad_suministradora;
      ir.anno = anno;
      ir.no_anno = no_anno;
      ir.factura = factura;
      await AppDataSource.manager.save(Informe_Recepcion, ir);
      return res.status(200).send({ message: 'Informe de Recepcion guardado correctamente' });
    }
    return res.status(401).send({ message: 'Usted no tiene acceso a este componente' });
  }

  public getLastNumber = async (req: Request, res: Response) => {
    const token = req.query.token;
    const anno = req.query.anno;
    const valid: any = await AppDataSource.manager.find(Token, { where: { token: token } });
    if (valid.length > 0) {
      return res.status(200).send(await AppDataSource.manager.find(Informe_Recepcion, { where: { anno: anno } }));
    }
    return res.status(401).send({ message: 'Usted no tiene acceso a este componente' });
  }

  public routes() {
    this.router.post('/informe', this.saveInforme);
    this.router.get('/informe', this.getInforme);
    this.router.get('/informebyyear', this.getInformeByYear);
    this.router.get('/tt', this.getLastNumber);
  }
}
