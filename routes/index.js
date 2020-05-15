const route = require('express').Router()

//on requesting for /signup signup.js loads
route.use('/signup', require('./userinfo'))

//on requesting for /login login.js loads
route.use('/login', require('./login'))

exports = module.exports = route

