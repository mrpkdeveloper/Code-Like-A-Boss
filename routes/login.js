const route = require('express').Router()
const user = require('../db').user

route.post('/', (req, res) => {
    user.findOne({
        where: {
            username: req.body.username,
            password: req.body.password
        }
    }).then((user) => {
        res.status(201).send(user)
    }).catch((err) => {
        res.status(501).send({ error: "could not able to find the  user" })
    })
})
exports = module.exports = route 