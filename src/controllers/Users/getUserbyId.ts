import { Request, Response } from "express";
import { User, UserSql } from '../../models/user';

export default async(req: Request, res: Response) => {
    const id: string = req.params.id;
    const foundUser: User = await UserSql.findByPk(id);

    if(!foundUser){
       return res.status(404).send(`Usuario ${id} no existe`);
    }

    res.status(200).json(foundUser);
};

