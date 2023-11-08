const tasks = [];

const getTasks = async (req, res) => {
    try {
        res.status(200).json(tasks)
    } catch (error) {
        res.status(500).json({ message: "Server Error"})
    }
};

const addTasks = async (req, res) => {
    try {
        console.log(req);
        // const {id, title, description, done } = req;
        // tasks.push({id: id, title: title, description: description, done: done})
        res.status(200).json({id: id, title: title, description: description, done: done })
    } catch (error) {
        res.status(500).json({ message: "Server Error"})
    }
}


module.exports = { getTasks, addTasks };