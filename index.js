import express from 'express'
import cors from 'cors'
import bodyParser from 'body-parser'

import { ping } from './src/controllers/ping.js'
import { login } from './src/controllers/login.js'

const app = express()
const port = 3000

app.use(cors())
app.use(bodyParser.json())

app.post('/ping', ping)
app.get('/login', login)

app.listen(port, () => console.log(`Listening on port ${port}`))