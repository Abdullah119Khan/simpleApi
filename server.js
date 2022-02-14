const express = require('express')
const app = express()
const dotenv = require('dotenv')
const cors = require('cors')
const bodyParser = require('body-parser');

dotenv.config({ path: 'config.env' })
require('./dbConn/dbConn')

const postRoute = require('./routes/posts');

const PORT = process.env.PORT;

app.use(bodyParser.json({ extended: true}))
app.use(bodyParser.urlencoded({ extended: true}))
app.use(cors())

app.use('/api', postRoute);

app.listen(PORT, () => { console.log(`Server Running On PORT ${PORT}`)})