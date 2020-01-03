const jwt = require('jsonwebtoken');
const config = require('../config.js');
const models = require('../models');

const messages = {
    unauthorized: 'You are not authorized to access this resource',
};

module.exports = function(req, res, next) {

    if(!req.headers.authorization) {
        res.status(401).send({
            error: messages.unauthorized,
        });
        return;
    }

    const tokenToVerify = req.headers.authorization.replace('Bearer ', '');

    jwt.verify(tokenToVerify, config.JWTSECRET, (err, data) => {
        if (err) {
            res.status(401).send({
                error: messages.unauthorized,
            });
            return;
        }

        // add user data to the request body for future use (data taken from token)
        const decodedTokenPayload = jwt.decode(tokenToVerify);
        req.body.userEmail = decodedTokenPayload.email;
        req.body.userPassword = decodedTokenPayload.password;
        req.body.userId = decodedTokenPayload.userId;

        // check if user is logged in (maybe user has logged out but the token is still valid - not expired)
        models
            .User
            .findAll({
                where: {
                    email: req.body.userEmail,
                    password: req.body.userPassword
                }
            })
            .then(data => {
                if (!data.length) {
                    res
                        .status(401)
                        .send({
                            error: messages.unauthorized,
                        });
                    return
                }

                if (!data[0].isLoggedIn) {
                    res
                        .status(401)
                        .send({
                            error: messages.unauthorized + '. You are not logged in.',
                        });
                    return
                }

                // everything is fine, user passed authentication
                next();
            });
    });
};
