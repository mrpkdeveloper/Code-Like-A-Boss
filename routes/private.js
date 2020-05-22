const route = require('express').Router()

route.get('/', (req, res) => {
    if (req.user) {
        res.send("visible to only logged user")
    } else {
        res.redirect('/login')
    }

})

exports = module.exports = route 