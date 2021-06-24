import { config } from 'dotenv';

config();

export default {
    port: process.env.PORT,
    db_user: process.env.DB_USER,
    db: process.env.DB,
    db_psw: process.env.DB_PSW,
    jwt_phrase: process.env.JWT_PHRASE
}