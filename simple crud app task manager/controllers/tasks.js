const Tasks = require("../models/tasks");

exports.getIndex = (req, res, next) => {
    Tasks.findAll()
        .then((tasks) => {
            res.render("index", {
                tasks: tasks,
                path: "/",
            });
        })
        .catch((err) => {
            console.log(err);
        });
};

exports.postTasks = (req, res, next) => {
    const title = req.body.title;

    Tasks.create({
        title: title,
        taskDoneStatus: false,
    })
        .then((result) => {
            console.log(result);
            res.redirect("/");
        })
        .catch((err) => {
            console.log(err);
        });
};

exports.postDeleteTasks = (req, res, next) => {
    const taskId = req.body.taskId;
    Tasks.findByPk(taskId)
        .then((task) => {
            return task.destroy({ truncate: true });
        })
        .then(() => {
            res.redirect("/");
        })
        .catch((err) => {
            console.log(err);
        });
    
};

exports.postEditTask = (req, res, next) => {};
