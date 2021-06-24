import { Router } from "express";
import { check } from 'express-validator';

import { loginUser, registerUser } from '../controllers/users.controller';

const router = Router();

router.post('/auth/login', loginUser);

router.post('/auth/register',[
    check('username', 'The name field is empty').not().isEmpty(),
    check('password', 'The password cannot be empty').not().isEmpty(),
    check('email', 'The email is not valid').isEmail()
], registerUser);

export default router;