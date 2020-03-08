import { Request, Response, NextFunction } from 'express';
import { Employee, EmployeeSchema } from '../models/employees';


export default (req: Request, res: Response, next: NextFunction) => {
    const employee: Employee = req.body;
    const validation = EmployeeSchema.validate(employee);

    if(validation.error){
        return res.status(400).json(validation.error.details);
    }

    next();
}