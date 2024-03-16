import express from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'
import dotenv from 'dotenv'

import authRoutes from './routes/auth.routes.js'
import messageRoutes from './routes/message.routes.js'
import connectToMongoDB from './db/connectToMongoDB.js'

const app = express()
const port = process.env.port || 5000

dotenv.config()
app.use(bodyParser.json())
app.use(cors())

//root route : http://localhost:5000/
// app.get('/',(req,res) => res.send('Hello World'))

app.use('/api/auth/',authRoutes)
app.use('/api/message/',messageRoutes)

app.listen(port,() => {
    connectToMongoDB()
    console.log(`server running on port : ${port}`)
})