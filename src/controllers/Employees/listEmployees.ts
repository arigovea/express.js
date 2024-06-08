import { Request, Response } from 'express';
import { empleados } from '../../fake-data/empleados.json';

export default (req: Request, res: Response) => {
    res.status(200).json(empleados);
};
