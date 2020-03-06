import { Request, Response } from "express";
import { usuarios } from '../../fake-data/usuarios.json';


export default (req: Request, res: Response) => {
    res.status(200).json(usuarios);
};