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
    index: (req,res)=>{
        models
            .Task
            .FindAll()
            .then(results=>{
                res.send(results);
            })
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
