import { Request, Response, NextFunction } from 'express';
import { User, UserSchema, UserCreateSchema } from '../models/user';

export const usersEditValidator = (req: Request, res: Response, next: NextFunction) => {
    const user: User = req.body;
    const validation = UserSchema.validate(user);

    if(validation.error){
        return res.status(400).json(validation.error.details);
    }

    next();
}

export const usersCreateValidator = (req: Request, res: Response, next: NextFunction) => {
    const user: User = req.body;
    const validation = UserCreateSchema.validate(user);

    if(validation.error){
        return res.status(400).json(validation.error.details);
    }

    next();
}