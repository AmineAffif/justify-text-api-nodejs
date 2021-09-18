// Imports
const express = require("express")
const router = express.Router()
const apiController = require("../controllers/api")



router.post('/justify', apiController.justify )






module.exports = router