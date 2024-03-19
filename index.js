import express from 'express'
import cors from 'cors'
import bodyParser from 'body-parser'

import { ping } from './src/controllers/ping.js'

const app = express()
const port = 3000

app.use(cors())
app.use(bodyParser.json())

app.get('/ping', ping)

app.listen(port, () => console.log(`Listening on port ${port}`))