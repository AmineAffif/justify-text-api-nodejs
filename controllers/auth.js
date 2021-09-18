

exports.login = (req, res) => {
    console.log(req.body)
    res.send(req.body)
}
exports.register = (req, res) => {
    console.log(req.body)
    res.send("Register Form submitted")
}