import listEmployees from '../controllers/Employees/listEmployees';
import updateEmployee from '../controllers/Employees/listEmployees';
import getEmployeebyId from '../controllers/Employees/getEmployeebyId';
import deleteEmployee from '../controllers/Employees/listEmployees';
import createEmployee from '../controllers/Employees/listEmployees';
import express, { Router } from 'express';
import employeeValidationSchema from '../middlewares/employees';
const router: Router = express.Router();


//Obtener lista de empleados
router.get('/list', listEmployees);

//Crear un nuevo empleado
router.post('/create', [employeeValidationSchema, createEmployee]);

//Eliminar un empelado
router.delete('/delete/:id', deleteEmployee);

//Actualiza un usuario en esoecifico
router.put('/update', [employeeValidationSchema, updateEmployee]);

//Retorna un usuario en especifico por ID
router.get('/find/:id', getEmployeebyId);

export default router;