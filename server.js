const express = require('express')
const app = express()
const path = require('path')

//to run index.html file
app.use('/', express.static(path.join(__dirname, 'public_static')))

//these lines are for handling post requests to the server
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

//on requesting /routes index.js runs
app.use('/api', require('./routes').route)
app.listen(1111, () => console.log("server started at http://localhost:1111"))