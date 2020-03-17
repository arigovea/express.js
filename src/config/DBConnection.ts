import { Sequelize } from 'sequelize';
import { constants } from './constants';

export const sequelize = new Sequelize(constants.URI);