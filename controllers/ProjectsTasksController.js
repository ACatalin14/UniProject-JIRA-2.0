const models = require('../models');

const ProjectsTasksController = {

    index: (req,res) => {
        models
            .Task
            .findAll({
                where: {
                    projectId : req.params.projectId
                },
                include : [{model: models.TimeTracker}]
            })
            .then(results=>{
                res.send(results);
            })
    },

    create: (req,res) =>{
        const body = req.body;
        models
            .Task
            .create({
                title: body.title,
                type: body.type,
                priority: body.priority,
                status: body.status,
                resolution: body.resolution,
                description: body.description,
                projectId: req.params.projectId
            })
            .then(Task=>{
                models
                    .TimeTracker
                    .create({
                        taskId: Task.taskId,
                        estimated: body.TimeTracker.estimated,
                        remaining: body.TimeTracker.remaining,
                        logged: body.TimeTracker.logged
                    })
                    .then(TimeTracker=>{
                        res.send({Task,TimeTracker});
                    });
            });
    }
}

module.exports = ProjectsTasksController;