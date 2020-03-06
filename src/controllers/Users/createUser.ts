import { Request, Response } from "express";
import { usuarios } from '../../fake-data/usuarios.json';
import { User } from '../../models/user';


export default (req: Request, res: Response) => {
    const newUser: User = req.body;
    usuarios.push(newUser);
    res.status(201).json(newUser);
};