const express = require('express');
const projectsController = require('./controllers/ProjectsController');
const authenticationMiddleware = require('./middlewares/authentication');

const router = express.Router();

router.get('/projects', projectsController.index);
router.get('/projects/:id', projectsController.show);
router.post('/projects', authenticationMiddleware,projectsController.create);
router.put('/projects/:id',authenticationMiddleware, projectsController.update);
router.delete('/projects/:id',authenticationMiddleware, projectsController.delete);

module.exports = router;