const route = require('express').Router()

//on requesting for /signup userinfo.js loads
route.use('/signup', require('./userinfo'))

//on requesting for /login login.js loads
route.use('/login', require('./login'))

route.use('/private', require('./private'))

exports = module.exports = route

