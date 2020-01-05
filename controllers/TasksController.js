const models = require('../models');

const TasksController = {
    show: (req, res) => {
        models
            .Task
            .findByPk(req.params.taskId,{
                include: [{model: models.TimeTracker}]
            })
            .then(task => {
                if (!task) {
                    return res.send({});
                }
                return res.send(task);
            })
    },
    //Shows all tasks for a project. Not yet
    index: (req, res) => {
        models
            .Task
            .findAll({
                include : [{model: models.TimeTracker}]
            })
            .then(tasks => {
               res.send(tasks);
            })

    },
    create: (req, res) => {
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
            .then(Task => {
                models.TimeTracker.create({
                    taskId: Task.taskId,
                    estimated: body.TimeTracker.estimated,
                    remaining: body.TimeTracker.remaining,
                    logged: body.TimeTracker.logged
                })
                .then(TimeTracker => {
                    return res.send({Task,TimeTracker});
                });
            });
    },
    update: (req, res) => {
        const body = req.body;
        const id = req.params.taskId;
        models
            .Task
            .update(body, {
                where: {
                    taskId: id
                }
            })
            .then(resultTask => {
                models
                    .TimeTracker
                    .update(body.TimeTracker,{
                        where:{
                            taskId: id
                        }
                    }).then(resultTimeTracker=>{
                        models
                            .Task
                            .findByPk(id,{
                                include: [{model: models.TimeTracker}]
                            }).then(data=>res.send(data));     
                    })
            });
    },
    delete: (req, res) => {
        const id = req.params.taskId;
        models
            .Task
            .destroy({
                where: {
                    taskId: id,
                }
            })
            .then(data => {
                models.TimeTracker.destroy({
                    where: {
                        taskId: id
                    }
                }).then(()=>{
                    return res.send(true);
                })
            })
    },
};

module.exports = TasksController;
