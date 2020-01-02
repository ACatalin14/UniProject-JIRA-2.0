const express = require('express');
const projectsController = require('./controllers/ProjectsController');
const usersController = require('./controllers/UsersController');
const authenticationController = require('./controllers/AuthenticationController');
const authenticationMiddleware = require('./middlewares/authentication');

const router = express.Router();

// Login / Logout
router.post('/login', authenticationController.login);

router.use('/logout', authenticationMiddleware);
router.post('/logout', authenticationController.logout);

// User CRUD
router.get('/users', usersController.index);
router.get('/users/:id', usersController.show);
router.post('/users', usersController.create);
router.put('/users/:id', usersController.update);
router.delete('/users/:id', usersController.delete);

// Project CRUD
router.get('/projects', projectsController.index);

router.get('/projects/:id', projectsController.show);

router.post('/projects', authenticationMiddleware);
router.post('/projects', projectsController.create);

router.put('/projects/:id', authenticationMiddleware);
router.put('/projects/:id', projectsController.update);

router.delete('/projects/:id', authenticationMiddleware);
router.delete('/projects/:id', projectsController.delete);

module.exports = router;
