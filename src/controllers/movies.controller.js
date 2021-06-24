import db from '../database/db';

var Films = db.Film;

export const getMovies = async(req, res) => {
    const movies = await Films.findAll({attributes: ["image", "title", "creationDate"]});
    res.json(movies);
};

export const getMovieDetails = async (req, res) => {
    const movie = await Films.findOne({
        where: { id: req.params.filmId }
    });

    res.json(movie);
}

export const postMovies = async(req, res) => {
    const movie = await Films.create(req.body);
    res.json(movie);
};

export const putMovie = async (req, res) => {
    await Films.update(req.body, {
        where: { id: req.params.filmId }
    });
    res.json({ success: 'Succesfull Modification' });
};

export const deleteMovie = async (req, res) => {
    await Films.destroy({
        where: { id: req.params.filmId }
    });

    res.json({ success: 'The movie was deleted' });
}