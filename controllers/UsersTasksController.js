const models = require('../models');

const UsersTasksController = {

    addTaskToUser: (req,res)=>{
        models.sequelize.query(`INSERT INTO UserTask (userId,taskId,role) VALUES
                        (${req.params.userId},${req.params.taskId},'${req.body.role}')`)
    },

    getAllTasksForUser: (req,res)=>{
        models.sequelize.query(`SELECT * FROM Tasks t JOIN UserTask u ON t.taskId=u.taskId WHERE userId =${req.params.userId}`)
              .then(([results,metadata])=>{
                  res.send(results);
              })
    },

    getAllUsersForTask: (req,res)=>{
        models.sequelize.query(`SELECT * FROM Users u JOIN UserTask t ON u.userId =t.userId WHERE taskId=${req.params.taskId}`)
              .then(([results,metadata])=>{
                  res.send(results);
              })
    }

};

module.exports = UsersTasksController;
