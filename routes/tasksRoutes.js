const express = require("express");
const router = express.Router();
const { getTasks, addTasks } = require("../controllers/tasksController");

router.get("/getTasks", getTasks);
router.post("/addTasks", addTasks);

module.exports = router;