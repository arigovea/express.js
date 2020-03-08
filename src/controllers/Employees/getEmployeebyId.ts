import { Request, Response } from 'express';
import { empleados } from '../../fake-data/empleados.json';
import { Employee } from '../../models/employees';

export default(req: Request, res: Response) => {
    const id: string = req.params.id;
    const employeeFound: Employee = empleados.find(employee => employee.id === id);
    
    if(!employeeFound){
        return res.status(404).send(`Empleado ${id} no existe`);
    }

    res.status(200).json(employeeFound);
};
