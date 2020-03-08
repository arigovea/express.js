import { Request, Response } from 'express';
import { empleados } from '../../fake-data/empleados.json';
import { Employee } from '../../models/employees';

export default (req: Request, res: Response) => {
    const newEmployee: Employee = req.body;
    empleados.push(newEmployee);
    res.status(201).json(newEmployee);
}
