import listUsers from '../controllers/Users/listUsers';
import createUser from '../controllers/Users/createUser';
import deleteUser from '../controllers/Users/deleteUser';
import updateUser from '../controllers/Users/updateUser';
import findUser from '../controllers/Users/getUserbyId';
import express, { Router } from 'express';
const router: Router = express.Router(); 


// Obtener usuarios (listar)
router.get('/list', listUsers);

//Crear un nuevo usuario
router.post('/create', createUser); 

// Delete un usuario en especifico
router.delete('/delete/:id', deleteUser);

//Actualiza un usuario en especifico
router.put('/update', updateUser);

//Retorna un usuario en especifico
router.get('/find/:id', findUser);

export default router;