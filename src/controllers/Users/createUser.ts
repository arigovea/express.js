import { Request, Response } from 'express';
import { User, UserSql } from '../../models/user';
import { v4 as uuidv4 } from 'uuid';


export default async (req: Request, res: Response) => {
    let user: User = req.body;
    user.id = uuidv4(); 
    await UserSql.create(user)
    res.status(201).json(user);
};