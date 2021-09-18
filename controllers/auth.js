const models = require("../models")
const jwtUtils = require("../utils/jwt.utils")
const bcrypt = require("bcrypt")


exports.login = (req, res) => {

    const { email, password } = req.body

    // Checking if empty
    if (email == "" || password == "") {


        return res.status(400).json({ "error": "missing parameters" })

    } else {

        models.User.findOne({
            where: { email: email }
        })
            .then(function (userFound) {
                if (userFound) {
                    bcrypt.compare(password, userFound.password, function(errBcrypt, resBcrypt){
                        if(resBcrypt){
                            return res.status(200).json({ 
                                "userId": userFound.id,
                                // "token": jwtUtils.generateTokenForUser(userFound),
                            })
                        }else {
                            return res.status(404).json({ "error": "invalid password" })
                        }
                    })
                } else {
                    return res.status(404).json({ "error": "user doesn't exist in DB" })
                }
            })
            .catch(function (err) {
                return res.status(500).json({ "error": "unable to verify user" })
            })

    }

}
exports.register = (req, res) => {

    const { email, password, confirmPassword, username } = req.body

    // Checking if empty
    if (email == "" || password == "" || confirmPassword == "" || username == "") {

        console.log("null")
        return res.status(400).json({ "error": "missing parameters" })

    } else {
        console.log("non null")

        models.User.findOne({
            attributes: ["email"],
            where: { email: email }
        })
            .then(function (userFound) {
                if (!userFound) {
                    bcrypt.hash(password, 5, function (err, bcryptedPassword) {
                        const newUser = models.User.create({
                            email: email,
                            username: username,
                            password: bcryptedPassword,
                            token: jwtUtils.generateTokenForUser(models.User),
                            daily_rate: 80000,
                        })
                            .then(function (newUser) {
                                return res.status(200).json({ "userId": newUser.id })
                            })
                            .catch(function (err) {
                                return res.status(500).json({ "error": "cannot add user" })
                            })
                    })
                } else {
                    return res.status(409).json({ "error": "user already exist" })
                }
            })
            .catch(function (err) {
                return res.status(500).json({ "error": "unable to verify user" })
            })

    }


}