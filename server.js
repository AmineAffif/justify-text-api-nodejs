// Imports
const express = require("express")

// Instanciate server
const app = express()

const list = [
    {
        username: "amine affif",
        email: "amine@affif.fr",
        password: "r8d0h7498y4e9",
    }
]

// Routes
app.get("/list", (req, res) => {
    res.json(list)
})

// Launch server
app.listen(8080)