import { Router } from "express";

import { getMovies, getMovieDetails, postMovies, putMovie, deleteMovie } from '../controllers/movies.controller';

const router = Router();

router.get('/movies', getMovies);
router.get('/movies/:filmId', getMovieDetails);

router.post('/movies', postMovies);
router.put('/movies/:filmId', putMovie);
router.delete('/movies/:filmId', deleteMovie);

export default router;