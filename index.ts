import express, { Application } from 'express';
import entryPoint from './src/app'
const app: Application = express ();
const port: number = 8000;

// entry point
app.use(entryPoint);

// server up
app.listen(port, () => {
    console.log(`Servidor iniciado en ${port}`);
});