import { Router, Request, Response } from 'express'
import { AppDataSource } from '../data-source';
import { Factura_Producto } from '../entity/facturas_productos.entity';
import { Producto } from '../entity/producto.entity';
import { Token } from '../entity/token.entity';
const bcrypt = require("bcrypt");

export class ProductoController {
  public router: Router;

  constructor() {
    this.router = Router();
    this.routes();
  }

  public getProductos = async (req: Request, res: Response) => {
    const token = req.query.token;
    const valid: any = await AppDataSource.manager.find(Token, { where: { token: token } });
    if (valid.length > 0) {
      return res.status(200).send(await AppDataSource.manager.find(Producto));
    }
    return res.status(401).send({ message: 'Usted no tiene acceso a este componente' });
  }

  public saveProducto = async (req: Request, res: Response) => {
    const token = req.query.token;
    const valid: any = await AppDataSource.manager.find(Token, { where: { token: token } });
    if (valid.length > 0) {
      const codigo = req.body.codigo;
      const nombre = req.body.nombre;
      const descripcion = req.body.descripcion;
      const precio = req.body.precio;
      const precio_unitario = req.body.precio_unitario;
      const p = await AppDataSource.manager.find(Producto, { where: { codigo: codigo } });
      if (p.length == 0) {
        const pn = new Producto();
        pn.codigo = codigo;
        pn.nombre = nombre;
        pn.descripcion = descripcion;
        pn.precio = precio;
        pn.precio_unitario = precio_unitario;
        await AppDataSource.manager.save(Producto, pn);
        return res.status(200).send({ message: 'Producto creado satisfactoriamente' });
      }
      return res.status(400).send({ message: 'El producto ya existe' })
    }
    return res.status(401).send({ message: 'Usted no tiene acceso a este componente' });
  }

  public deleteProducto = async (req: Request, res: Response) => {
    const token = req.query.token;
    const valid: any = await AppDataSource.manager.find(Token, { where: { token: token } });
    if (valid.length > 0) {
      const delet = await AppDataSource.manager.find(Producto, { where: { codigo: req.params.codigo } });
      return res.status(200).send({ producto_eliminado: await AppDataSource.manager.remove(Producto, delet) });
    }
    return res.status(401).send({ message: 'Usted no tiene acceso a este componente' });
  }

  public updateProducto = async (req: Request, res: Response) => {
    const token = req.query.token;

    const codigo = req.body.codigo;
    const nombre = req.body.nombre;
    const descripcion = req.body.descripcion;
    const precio = req.body.precio;
    const precio_unitario = req.body.precio_unitario;
    const valid: any = await AppDataSource.manager.find(Token, { where: { token: token } });
    if (valid.length > 0) {
      await AppDataSource.manager.update(Producto, req.params.codigo, {
        codigo: codigo,
        nombre: nombre,
        descripcion: descripcion,
        precio: precio,
        precio_unitario: precio_unitario
      });
      return res.status(200).send({ message: 'producto actualizado correctamente' });
    }
    return res.status(401).send({ message: 'Usted no tiene acceso a este componente' });
  }

  public getProductoByCodigo = async (req: Request, res: Response) => {
    const token = req.query.token;
    const valid: any = await AppDataSource.manager.find(Token, { where: { token: token } });
    if (valid.length > 0) {
      return res.status(200).send(await AppDataSource.manager.find(Producto, { where: { codigo: req.params.codigo } }));
    }
    return res.status(401).send({ message: 'Usted no tiene acceso a este componente' });
  }

  public routes() {
    this.router.get('/productos', this.getProductos);
    this.router.post('/producto', this.saveProducto);
    this.router.delete('/producto', this.deleteProducto);
    this.router.put('/producto/:codigo', this.updateProducto);
    this.router.get('/producto/:codigo', this.getProductoByCodigo);
  }
}