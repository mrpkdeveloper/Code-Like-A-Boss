const express = require('express')
const app = express()
const path = require('path')

//to run index.html file
app.use('/', express.static(path.join(__dirname, 'public_static')))

//on requesting /routes index.js runs
app.use('/routes', require('./routes').route)
app.listen(1111, () => console.log("server started at http://localhost:1111"))