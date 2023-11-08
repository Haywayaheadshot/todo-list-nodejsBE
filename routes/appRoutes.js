const express = require("express");
const app = express();
const router = express.Router();
const taskRouter = require("./tasksRoutes")
const { welcomeMessage } = require("../controllers/appController");

router.get("/", welcomeMessage);

module.exports = router;