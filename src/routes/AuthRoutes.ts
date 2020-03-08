import express, { Router } from 'express';
import login from '../controllers/Auth/login';
import credentialValidationSchema from '../middlewares/credentials';
const router: Router = express.Router(); 

//login route
router.post('/login', [credentialValidationSchema, login]);

export default router;