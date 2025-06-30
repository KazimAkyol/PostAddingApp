const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const dotenv = require('dotenv')
const database = require('./config/database')
const authRouter = require('./routes/auth')
const postRouter = require('./routes/post')

dotenv.config()

const app = express()
app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use('/', authRouter)
app.use('/', postRouter)

const PORT = process.env.PORT || 5000

database()

app.listen(PORT, () => {
    console.log("Server is running", PORT);
})