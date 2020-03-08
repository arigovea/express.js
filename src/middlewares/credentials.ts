import { Request, Response, NextFunction } from 'express';
import { Credentials, CredentialsSchema } from '../models/credentials';

export default (req: Request, res: Response, next: NextFunction) =>{
    const Credential: Credentials = req.body;
    const validation = CredentialsSchema.validate(Credential);
    
    if(validation.error){
        return res.status(400).json(validation.error.details);
    }

    next();
}