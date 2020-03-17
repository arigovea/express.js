import { Request, Response } from "express";
import { UserSql, User } from '../../models/user';

export default async (req: Request, res: Response) => {
    const usuarios: User[] = await UserSql.findAll();
    res.status(200).json(usuarios);
};