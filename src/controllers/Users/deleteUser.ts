import { Request, Response } from "express";
import { UserSql } from "../../models/user";


export default async (req: Request, res: Response) => {
    const id: string = req.params.id;
    const foundUser = await UserSql.destroy({ where: { id } });
    if(foundUser < 1){
        return res.status(404).send(`Usuario ${id} no existe`);
    }

    res.status(200).send(`Usuario ${id} eliminado con éxito`); 
};