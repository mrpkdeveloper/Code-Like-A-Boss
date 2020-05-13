const user = require('../db').user
const route = require('express').Router()

route.get('/', (req, res) => {
    //we want to send all users as an array from our databse

    user.findAll()               //this will get all the data from user table and pass to then
        .then((users) => {
            res.status(200).send(users)
        })
        .catch((err) => {
            res.status(500).send({
                error: "could not retrieve user"

            })
        })

})

route.post('/', (req, res) => {
    user.create({
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        username: req.body.username,
        password: req.body.password,
        address: req.body.address
    })
        .then((user) => {
            res.status(201).send(user)
        })
        .catch((err) => {
            res.status(501).send({
                error: "could not able to add new user"
            })
        })

})

exports = module.exports = route