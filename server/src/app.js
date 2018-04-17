const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')
const config = require('./config')
const path = require('path')

app.use(morgan('combined'))
app.use(cors())
app.use(bodyParser.json())

require('./router')(app)

app.use(express.static(path.join(__dirname, '../../public/dist' )));

//app.listen(process.env.PORT || config.data.port)
app.listen(8080)
console.log("\nServidor Rodando -> https://localhost:" + process.env.PORT + "\n")
