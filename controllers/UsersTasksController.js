const models = require('../models');

const UsersTasksController = {

    addTaskToUser: (req,res)=>{
        models
            .User
            .findByPk(req.params.userId)
            .then(user=>{
                models.Task.findByPk(req.body.taskId)
                .then(task=>{
                    user.addTask(task,{through:{
                        role: req.body.role
                    }})
                    .catch(error=>{
                        console.log(error);
                    })
                })
            })
    },

    getAllTasksForUser: (req,res)=>{
        /*
        models
            .Task
            .findAll({
                include: [{
                    model : models.User,
                    through: {
                        where:{
                           userId: req.params.userId
                        }
                    }
                }]
            })
            .then(results=>{
                res.send(results);
            })
            */
    }

};

module.exports = UsersTasksController;
