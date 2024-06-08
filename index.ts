import express, { Application } from 'express';
import entryPoint from './src/app';
import  { constants }  from './src/config/constants';
import { sequelize } from './src/config/DBConnection';
//import { UserSql } from './src/models/user';
//import { usuarios } from './src/fake-data/usuarios.json';
const app: Application = express ();

//DB connection
sequelize
    .authenticate({})
    //.then(auth => sequelize.sync({ force: true })) force solo la primera vez del proyecto
    //.then(sync => UserSql.bulkCreate(usuarios)) Solo colocar la primera vez al iniciar una tabla
    .then(() => console.log('Connection has been established successfully'))
    .catch((err: any) => console.error('Unable to connect to the database:', err));

// entry point
app.use(entryPoint);

// server up
app.listen(constants.port, () => {
    console.log(`Servidor iniciado en ${constants.port}`);
});