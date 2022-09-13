import { Token } from '../entity/token.entity';
import { Usuario } from '../entity/usuarios.entity';
import { AppDataSource } from './../data-source'
import { Router, Request, Response } from 'express'
const bcrypt = require("bcrypt");

export class UsuarioController {
  public router: Router;

  constructor() {
    this.router = Router();
    this.routes();
  }

  public saveUsuario = async (req: Request, res: Response) => {
    const token = req.body.token;
    const valid: any = await AppDataSource.manager.find(Token, { where: { token: token } });
    if (valid.length > 0) {
      const body = req.body;
      const usuario = body.usuario;
      const password = body.password;
      const nombre = body.nombre;

      if (await (await AppDataSource.manager.find(Usuario, { where: { usuario: usuario } })).length == 0) {
        const user = new Usuario()

        bcrypt.hash(password, 10, async (err, encrypted) => {
          if (err) {
            return res.status(500).send({ message: 'En estos momentos no se puede por favor intentelo mas tarde' });
          } else {
            user.password = encrypted;
            user.usuario = usuario;
            user.nombre = nombre;
            await AppDataSource.manager.save(user);
            return res.status(200).send({ message: 'usuario creado correctamente' });
          }
        });
      } else {
        return res.status(302).send({ message: 'El usuario ya esta siendo usado' });
      }
    } else {
      return res.status(401).send({ message: 'Usted no tiene acceso a este componente' });
    }
  }

  public getUsuarios = async (req: Request, res: Response) => {
    const token = req.query.token;
    const valid: any = await AppDataSource.manager.find(Token, { where: { token: token } });
    if (valid.length > 0) {
      return res.status(200).send(await AppDataSource.manager.find(Usuario));
    }
    return res.status(401).send({ message: 'Usted no tiene acceso a este componente' });
  }

  public getUsuariosById = async (req: Request, res: Response) => {
    const token = req.query.token;
    const valid: any = await AppDataSource.manager.find(Token, { where: { token: token } });
    if (valid.length > 0) {
      return res.status(200).send(await AppDataSource.manager.find(Usuario, { where: { id: req.params.id } }));
    }
    return res.status(401).send({ message: 'Usted no tiene acceso a este componente' });
  }

  public deleteUsuariosById = async (req: Request, res: Response) => {
    const token = req.query.token;
    const valid: any = await AppDataSource.manager.find(Token, { where: { token: token } });
    if (valid.length > 0) {
      const delet = await AppDataSource.manager.find(Usuario, { where: { id: req.params.id } });
      return res.status(200).send({ usuario_eliminado: await AppDataSource.manager.remove(Usuario, delet) });
    }
    return res.status(401).send({ message: 'Usted no tiene acceso a este componente' });
  }

  public updateUsuario = async (req: Request, res: Response) => {
    const token = req.query.token;

    const body = req.body;
    const usuario = body.usuario;
    const nombre = body.nombre;
    const valid: any = await AppDataSource.manager.find(Token, { where: { token: token } });
    if (valid.length > 0) {
      await AppDataSource.manager.update(Usuario, req.params.id, { usuario: usuario, nombre: nombre });
      return res.status(200).send({ message: 'usuario actualizado correctamente' });
    }
    return res.status(401).send({ message: 'Usted no tiene acceso a este componente' });
  }

  public routes() {
    this.router.post('/usuarios', this.saveUsuario);
    this.router.get('/usuarios', this.getUsuarios);
    this.router.get('/usuario/:id', this.getUsuariosById);
    this.router.delete('/usuario/:id', this.deleteUsuariosById);
    this.router.put('/usuario/:id', this.updateUsuario);
  }

}

