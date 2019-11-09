const express = require('express');
const projectsController = require('./controllers/ProjectsController');

const router = express.Router();

router.get('/projects', projectsController.index);
router.post('/projects', projectsController.create);
router.get('/projects/:id', projectsController.show);
router.put('/projects/:id', projectsController.update);
router.delete('/projects/:id', projectsController.delete);

module.exports = router;
