const express = require('express')
const app = express()
const path = require('path')
const session = require('express-session')  // npm i express-session to handle sessions during login
const passport = require('./passport')

//these lines are for handling post requests to the server
app.use(express.json())
app.use(express.urlencoded({ extended: true }))


app.use(session({
    //this secret is used to encode cokkies
    secret: 'somesecretstring'
}))
app.use(passport.initialize())
app.use(passport.session())


//to run index.html file
app.use('/', express.static(path.join(__dirname, 'public_static')))

//on requesting /routes index.js runs
app.use('/', require('./routes/index'))
app.listen(1111, () => console.log("server started at http://localhost:1111"))