import { Request, Response } from "express";
import { User, UserSql } from '../../models/user';

export default async (req: Request, res: Response) => {
    const user: User = req.body; 
    const userUpdated = await UserSql.update(user, { where: { id: user.id } });
    
    if(userUpdated[0] === 0) {
        return res.status(404).send(`Usuario ${user.id} no existe`);
    };

    res.status(200).send(`Usuario ${user.id} actualizado con éxito`); 
};