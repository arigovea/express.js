import { Request, Response } from "express";
import { usuarios } from '../../fake-data/usuarios.json';


export default (req: Request, res: Response) => {
    const idToDelete: string = req.params.id;

    const foundUser = usuarios.findIndex(user => user.id === idToDelete);
    if(foundUser === -1){
        return res.status(404).send("Usuario no existe");
    }

    usuarios.splice(foundUser, 1);
    res.status(200).send("Eliminado con éxito")
};