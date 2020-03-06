import express, { Application } from 'express';
import bodyParser from "body-parser";
import usersRouters from './routes/UserRoutes';
const app: Application = express ();

// body parser
app.use(bodyParser.urlencoded({ extended: false}));
app.use(bodyParser.json());

// users routes
app.use('/users', usersRouters);

export default app;