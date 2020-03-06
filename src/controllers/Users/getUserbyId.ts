import { Request, Response } from "express";
import { usuarios } from '../../fake-data/usuarios.json';
import { User } from '../../models/user';

export default(req: Request, res: Response) => {
    const id: string = req.params.id;
    const foundUser: User = usuarios.find(user => user.id === id);
    if(!foundUser){
       return res.status(404).send("Usuario no existe");
    }
    res.status(200).json(foundUser);
};

