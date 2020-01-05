const models = require('../models');

const messages = {
    unauthorized: 'You are not authorized to access this resource ',
};

module.exports = (req,res,next) =>
{
    console.log("req.userId = " ,req.body.userId)
    console.log("req.projectId = " ,req.params.projectId)

    userId = req.body.userId;
    projectId = req.params.projectId;

    models.Project.findOne({
        where:{
            projectId : projectId
        }
    }).then(project=>{
        if(project!==null)
        {
            if(project.creatorId==userId)
            {
                console.log("Logged user owns the project");
                //If we need the project later
                req.body.project=project;
                next();
            }
            else
            {
                console.log("Logged user does not own the project")
                res.status(401).send({
                    error: messages.unauthorized +"You do not own the project",
                });
                return;
            }
        }
    });

}