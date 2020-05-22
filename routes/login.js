const route = require('express').Router()
const user = require('../db').user
const path = require('path')

route.get('/', (req, res) => {
    // res.sendFile(__dirname + "/login.html")
    res.sendFile('login.html', { root: path.join(__dirname, '../public_static') });
})

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