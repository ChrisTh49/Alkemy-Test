import jwt from 'jwt-simple';
import moment from 'moment';
import config from '../config';

const checkToken = (req, res, next) => {

    if(!req.headers['user-token']){
        res.json({ error: 'You need to include the userToken' })
    };

    const userToken = req.headers['user-token'];
    let payload = {};

    try {
        payload = jwt.decode(userToken, config.jwt_phrase);
    } catch (error) {
        return res.json({ error: 'The token is incorrect' })
    };

    if (payload.expiredAt < moment().unix()){
        return res.json({ error: 'The token is expired'})
    };

    req.userId = payload.userId;

    next();
};

export default {
    checkToken: checkToken
};