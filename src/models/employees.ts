import joi from '@hapi/joi';

export type Employee = {
    id: string;
    nombre: string;
    edad: number;
    cargo: string;
}

export const EmployeeSchema = joi.object().keys({
    id: joi.string().required(),
    nombre: joi.string().required(),
    edad: joi.number().required(),
    cargo: joi.string().required()
});