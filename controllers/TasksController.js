const models = require('../models');

const TasksController = {
    show: (req, res) => {
        models
            .Task
            .findByPk(req.params.taskId)
            .then(task => {
                if (!task) {
                    return res.send({});
                }
                models
                    .TimeTracker
                    .findByPk(req.params.taskId)
                    .then(timeTracker=>{
                        return res.send({task,timeTracker});
                    })
            })
    },
    //Shows all tasks for a project. Not yet
    index: (req, res) => {
        models
            .Task
            .findAll({
                include : [{model: models.TimeTracker, required:true}]
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
                    taskId: Task.taskId
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
            .then(updated => {
                models
                    .Task
                    .findByPk(id)
                    .then(data => res.send(data));
            });
    },
    updateTimeTracker: (req,res) => {
        const body = req.body;
        const id = req.params.taskId;
        models
            .TimeTracker
            .update(body, {
                where: {
                    taskId: id
                }
            })
            .then(updated => {
                models
                    .TimeTracker
                    .findByPk(id)
                    .then(data => res.send(data));
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
