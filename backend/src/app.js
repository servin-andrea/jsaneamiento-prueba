import express from 'express'
import helmet from 'helmet'
import cors from 'cors'

import config from './config'
import barrioRoutes from './resources/routes/barrio.routes'
import { syncDb } from './utils'

const app = express()

//settings
app.set('port', config.PORT)
//syncDb()

//middlewares
app.use(express.json())
app.use(express.urlencoded( {extended:false }))
app.use(helmet())
app.use(cors())

//routes
//app.use('/api/barrios', barrioRoutes)
app.use('/', (req, res) => {
    res.send({
        message: "Hello World!"
    })
})

export default app
