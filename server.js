// Imports
const express = require("express")
const dotenv = require("dotenv")
const path = require("path")
const { use } = require("./routes/pages")

dotenv.config({ path:"./.env" })


// Instanciate server
const app = express()


// Template Engine config
const publicDirectory = path.join(__dirname, "./public")
app.set("view engine", "hbs")
app.use(express.static(publicDirectory))


// Body Parser config
app.use(express.json());
app.use(express.urlencoded({extended: false}));


// Define Routes
app.use("/", require("./routes/pages"))
app.use("/auth", require("./routes/auth"))
app.use("/api", require("./routes/api"))




// Launch server
app.listen(8080)