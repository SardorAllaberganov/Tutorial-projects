const express = require("express");

const taskController = require("../controllers/tasks");

const router = express.Router();

router.get("/", taskController.getIndex);
router.post("/create-task", taskController.postTasks);
router.post("/delete", taskController.postDeleteTasks);
router.post("/edit", taskController.postEditTask);

module.exports = router;
