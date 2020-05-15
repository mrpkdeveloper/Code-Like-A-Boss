const express = require('express')
const app = express()
const path = require('path')

//these lines are for handling post requests to the server
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

//to run index.html file
app.use('/', express.static(path.join(__dirname, 'public_static')))

//on requesting /routes index.js runs
app.use('/', require('./routes/index'))
app.listen(1111, () => console.log("server started at http://localhost:1111"))