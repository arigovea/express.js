import { Request, Response } from 'express';
import { empleados } from '../../fake-data/empleados.json';
import { Employee } from '../../models/employees';


export default (req: Request, res: Response) => {
    const EmployeeToUpdate: Employee = req.body; 
    const index = empleados.findIndex(employee => employee.id === EmployeeToUpdate.id);

    if(index === -1){
        return res.status(404).send("Empleado no existe");
    }

    empleados.splice(index, 1, EmployeeToUpdate);
    res.status(200).json(EmployeeToUpdate);
};