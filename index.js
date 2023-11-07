const express = require("express");
const app = express();
const port = 8000


app.use("/", (_req, res) => {
    res.status(200).json("Hello World!")
})

app.listen(port, () => {
    console.log(`App is listening on port ${port}`)
});