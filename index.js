const express = require("express");
const app = express();
const port = 8000;
const tasksRouter = require("./routes/tasksRoutes");
const appRouter = require("./routes/appRoutes");

app.use("/", appRouter )

app.use("/tasks", tasksRouter)

app.listen(port, () => {
    console.log(`App is listening on port ${port}`)
});