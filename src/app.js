import express from 'express';
import path from 'path';

import usersRoutes from './routes/users.routes';
import charactersRoutes from './routes/characters.routes';
import moviesRoutes from './routes/movies.routes';
import config from './config';

import tokenMiddleware from './middlewares/token.middleware';

const app = express();

//settings

app.set('port', config.port || 3000);
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

//MIDDLEWARES

app.use(express.json());
app.use(express.urlencoded({extended: false}));

//ROUTES

app.use(usersRoutes);
app.use(tokenMiddleware.checkToken, charactersRoutes);
app.use(tokenMiddleware.checkToken, moviesRoutes);

export default app;