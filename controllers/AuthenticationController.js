
const config = require('../config');
const models = require('../models');
const jwt = require('jsonwebtoken');

const messages = {
    unauthorized: 'Credentials are not valid',
};

const AuthenticationController = {

    login: (req, res) => {
        const body = req.body;
        const providedEmail = body.email;
        const providedPassword = body.password;
        const uniqueIdentificationObject = {
            email: providedEmail,
            password: providedPassword
        };

        models
            .User
            .findAll({
                where: uniqueIdentificationObject
            })
            .then(data => {
                if (data.length) {

                    // set isLoggedIn field to TRUE
                    data[0]
                        .set('isLoggedIn', true, {
                            where: uniqueIdentificationObject
                        })
                        .save();

                    return jwt.sign(uniqueIdentificationObject, config.JWTSECRET, (err, token) => {

                        return res.send({
                            token: token,
                        });
                    });
                }

                res
                    .status(401)
                    .send({
                        error: messages.unauthorized,
                    });
            });
    },

    logout: (req, res) => {
        const userEmail = req.body.email;
        const userPassword = req.body.password;

        // set isLoggedIn field to FALSE
        models
            .User
            .update({ isLoggedIn: false }, {
                where: {
                    email: userEmail,
                    password: userPassword
                }
            });

        return res.status(200).send('Succesfully logged out.');
    }
};

module.exports = AuthenticationController;
