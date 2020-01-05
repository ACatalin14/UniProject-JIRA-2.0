const models = require('../models');

const TasksController = {
    show: (req, res) => {
        models
            .Task
            .findByPk(req.params.taskId)
            .then(data => {
                if (!data) {
                    return res.send({});
                }

                return res.send(data);
            })
    },
    //Shows all tasks for a project. Not yet
    index: (req, res) => {
        models
            .Task
            .findAll()
            .then(data => res.send(data));

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
                return res.send(Task);
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
                return res.send(true);
            })
    },
};

module.exports = TasksController;
