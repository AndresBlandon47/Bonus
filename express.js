const express = require('express')
const app = express()

app.use(express.static(__dirname+'/Public'))

app.listen(3000)