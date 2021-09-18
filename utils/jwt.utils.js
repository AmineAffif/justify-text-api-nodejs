const jwt = require("jsonwebtoken")
const dotenv = require("dotenv")

dotenv.config({ path:"../.env" })

const JWT_SIGN_SECRET = process.env.JWT_SIGN_SECRET

//exported functions
module.exports = {
    generateTokenForUser: function(userData) {
        return jwt.sign({
            userId: userData.id,
        },
        JWT_SIGN_SECRET,
        {
            expiresIn: '30d'
        })
    }
}