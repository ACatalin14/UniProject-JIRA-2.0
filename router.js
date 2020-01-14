const express = require('express');
const projectsController = require('./controllers/ProjectsController');
const usersController = require('./controllers/UsersController');
const tasksController = require('./controllers/TasksController');
const projectsTasksController = require('./controllers/ProjectsTasksController');
const usersTasksController = require('./controllers/UsersTasksController');
const authenticationController = require('./controllers/AuthenticationController');
const authenticationMiddleware = require('./middlewares/authentication');
const ownsProjectMiddleware = require('./middlewares/ownsProject');

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

//projectsTasksController
router.get('/projects/:projectId/tasks',projectsTasksController.index); 
router.post('/projects/:projectId/tasks',authenticationMiddleware,ownsProjectMiddleware,projectsTasksController.create);

//tasks controller
router.get('/tasks/:taskId',tasksController.show);
router.get('/tasks',tasksController.index);
router.put('/tasks/:taskId',authenticationMiddleware,tasksController.update);
router.delete('/tasks/:taskId',authenticationMiddleware,tasksController.delete);

//usersTasksController
/*
    primeste {
        "role": "role"
    }
*/
router.post('/users/:userId/tasks/:taskId',authenticationMiddleware,usersTasksController.addTaskToUser);
router.get('/users/:userId/tasks',usersTasksController.getAllTasksForUser);
router.get('/tasks/:taskId/users',usersTasksController.getAllUsersForTask);

module.exports = router;
