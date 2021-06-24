import db from '../database/db';
import config from '../config';

import bcrypt from 'bcrypt';
import { validationResult } from 'express-validator';
import moment from 'moment';
import jwt from 'jwt-simple';

const Users = db.User;

export const registerUser = async (req, res) => {

    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(422).json({errors: errors.array()});
    };

    req.body.password = await bcrypt.hashSync(req.body.password, 10);
    const user = Users.create(req.body);
    res.json(user);
};

export const loginUser = async (req, res) => {
    const user = await Users.findOne({
        where: { email: req.body.email }
    });

    if (user){
        const samePassword = bcrypt.compareSync(req.body.password, user.password);
        if (samePassword){
            res.json({ success: createToken(user) });
        }else{
            res.json({error: "The password is incorrect"});
        };
    } else {
        res.json({
            error: "Error in User or Password"
        });
    };
};

const createToken = (user) => {
    const payload = {
        userId: user.id,
        createdAt: moment().unix(),
        expiredAt: moment().add(5, 'minutes').unix()
    };

    return jwt.encode(payload, config.jwt_phrase);
};