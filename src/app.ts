import express, { Application } from 'express';
import bodyParser from "body-parser";
import usersRouters from './routes/UserRoutes';
import loginRouters from './routes/AuthRoutes';
import employeesRouters from './routes/EmployeeRoutes';
import tokenValidator from './middlewares/tokenValidator';
const app: Application = express ();

// body parser
app.use(bodyParser.urlencoded({ extended: false}));
app.use(bodyParser.json());

// users routes
app.use('/users', [tokenValidator, usersRouters]);

// employees routes
app.use('/employees', [tokenValidator, employeesRouters]);

// auth routes
app.use('/auth', loginRouters);

export default app;