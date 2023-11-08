const welcomeMessage = async(_req, res) => {
    try {
        res.status(201).json({
            description: "This is an application that can help you manage your tasks",
            githubLink: "https://github.com/Haywayaheadshot/todo-list-nextjsFE",
            builtWith: "NodeJs,ExpressJs,JavaScript",
            author: "Abubakar Ummar",
        })
    } catch (error) {
        res.status(500).json({ message: "Server Error"})
    }
}

module.exports = { welcomeMessage }