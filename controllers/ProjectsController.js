const models = require('../models');

const ProjectsController = {
    show: (req, res) => {
        models
            .Project
            .findByPk(req.params.id)
            .then(data => {
                if (!data) {
                    return res.send({});
                }

                return res.send(data);
            })
    },
    index: (req, res) => {
        models
            .Project
            .findAll()
            .then(data => res.send(data));

    },
    create: (req, res) => {
        const body = req.body;
        console.log(body.userId);
        models
            .Project
            .create({
                title: body.title,
                url: body.url,
                creatorId: body.userId
            })
            .then(project => {
                return res.send(project);
            });
    },
    update: (req, res) => {
        const body = req.body;
        const id = req.params.id;
        models
            .Project
            .update(body, {
                where: {
                    projectId: id
                }
            })
            .then(updated => {
                models
                    .Project
                    .findByPk(id)
                    .then(data => res.send(data));
            });
    },
    delete: (req, res) => {
        const id = req.params.id;
        models
            .Project
            .destroy({
                where: {
                    projectId: id,
                }
            })
            .then(data => {
                return res.send(true);
            })
    },
};

module.exports = ProjectsController;
