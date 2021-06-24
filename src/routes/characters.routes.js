import { Router } from "express";

import { 
    getCharacters, 
    getCharacter, 
    postCharacter, 
    putCharacter, 
    deleteCharacter } from '../controllers/characters.controller';

const router = Router();

router.get('/characters', getCharacters);
router.get('/characters/:characterId', getCharacter);

router.post('/characters', postCharacter)
router.put('/characters/:characterId', putCharacter);
router.delete('/characters/:characterId', deleteCharacter);

export default router;