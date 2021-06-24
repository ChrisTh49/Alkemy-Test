import db from '../database/db';

var Characters = db.Character;

export const getCharacters = async (req, res) => {
    const characters = await Characters.findAll({attributes: ["image", "name"]});
    res.status(200).json(characters);
};

export const getCharacter = async (req, res) => {
    const character = await Characters.findOne({
        where: { id: req.params.characterId }
    });

    res.json(character);
};

export const postCharacter = async (req, res) => {
    const character = await Characters.create(req.body);
    res.json(character);
};

export const putCharacter = async (req, res) => {
    await Characters.update(req.body, {
        where: { id: req.params.characterId }
    });
    res.json({ success: 'Succesfull Modification' });
};

export const deleteCharacter = async (req, res) => {
    await Characters.destroy({
        where: { id: req.params.characterId }
    });

    res.json({ success: 'The movie was deleted' });
}