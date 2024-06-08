import jwt from "jsonwebtoken"
import { Request, Response, NextFunction } from "express";
import { constants } from "../config/constants";

export default (req: Request, res: Response, next: NextFunction) => {
    
    const token = req.get("Authorization");

    if(!token) {
        return res.sendStatus(401);
    }

    jwt.verify(token, constants.JWTKey, (err: any, decoded: object) => {
        if (err) {
            return res.sendStatus(403);
        }
        
        next();
    });
}