import { Request, Response } from "express";
import { usuarios } from '../../fake-data/usuarios.json';
import { User } from '../../models/user';

export default (req: Request, res: Response) => {
    const UserToUpdate: User = req.body; 
    const index = usuarios.findIndex(user => user.id === UserToUpdate.id);

    if(index === -1){
        return res.status(404).send("Usuario no existe");
    }

    usuarios.splice(index, 1, UserToUpdate);
    res.status(200).json(UserToUpdate);
};