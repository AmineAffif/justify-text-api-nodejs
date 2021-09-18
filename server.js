// Imports
const express = require("express")
const dotenv = require("dotenv")
const path = require("path")

dotenv.config({ path:"./.env" })


// Instanciate server
const app = express()


// Body Parser config
app.use(express.json());
app.use(express.urlencoded({extended: true}));


// Template Engine config
const publicDirectory = path.join(__dirname, "./public")
app.set("view engine", "hbs")
app.use(express.static(publicDirectory))


// Routes

app.get("/", (req, res) => {
    res.render("index")
})

app.get("/api/login", (req, res) => {
    res.render("login")
})
app.post("/api/login", (req, res) => {
    
})

app.get("/api/register", (req, res) => {
    res.render("register")
})
app.post("/api/register", (req, res) => {
    
})

app.get("/api/justify", (req, res) => {
    
})
app.post("/api/justify", (req, res) => {
    
})

// Launch server
app.listen(8080)