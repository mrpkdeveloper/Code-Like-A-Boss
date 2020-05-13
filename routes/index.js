const route = require('express').Router()

//on requesting for /signup signup.html loads
route.use('/signup', require('./signup'))

//on requesting for /login login.html loads
route.use('/login', require('./login'))

exports = module.exports = {
    route
}