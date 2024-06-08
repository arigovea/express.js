import joi from '@hapi/joi';
import { sequelize } from '../config/DBConnection';
import { Model, DataTypes } from 'sequelize';

export type User = {
    id: string;
    login: string;
    password: string;
}

export const UserCreateSchema = joi.object().keys({
    login: joi.string().required(),
    password: joi.string().alphanum().required()
});

export const UserSchema = joi.object().keys({
    id: joi.string().required(),
    login: joi.string().required(),
    password: joi.string().alphanum().required()
});

export class UserSql extends Model {
    public id!: string;
    public login!: string;
    public password!: string;
}; 

UserSql.init({
    id: {
        type: DataTypes.STRING,
        allowNull: false,
        primaryKey: true,
    },
    login: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
    }
}, {
    sequelize,
    tableName: 'users',
});