import Sequelize from 'sequelize';
import config from '../config';

import charactersModel from '../models/Characters';
import filmModel from '../models/Films';
import userModel from '../models/Users';

const sequelize = new Sequelize(
    config.db,
    config.db_user,
    config.db_psw, {
        host: 'localhost',
        dialect: 'mysql',
});

sequelize.sync({ force: false }).then(() => {
    console.log('Tablas listas');
});

const Character = charactersModel(sequelize, Sequelize);
const Film = filmModel(sequelize, Sequelize);
const User = userModel(sequelize, Sequelize);

export default {
    Character,
    Film,
    User
};