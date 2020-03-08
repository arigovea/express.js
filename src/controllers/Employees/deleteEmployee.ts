import { Request, Response } from 'express';
import { empleados } from '../../fake-data/empleados.json';
export default (req: Request, res: Response) => {
    const idToDelete: string = req.params.id;

    const foundEmployee = empleados.findIndex(employee => employee.id === idToDelete);
    if(foundEmployee === -1){
        return res.status(404).send(`Empleado ${idToDelete} no existe`);
    }

    empleados.splice(foundEmployee, 1);
    res.status(200).send(`Empleado ${foundEmployee} eliminado con éxito`); 
};