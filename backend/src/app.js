import express from 'express'
import helmet from 'helmet'
import cors from 'cors'
import swaggerUi from 'swagger-ui-express'


import config from './config'
import barrioRoutes from './resources/routes/barrio.routes'
import { syncDb } from './utils'
import swaggerDocument from '../swagger.json'

const app = express()

//settings
app.set('port', config.PORT)
app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument))
syncDb()

//middlewares
app.use(express.json())
app.use(express.urlencoded( {extended:false }))
app.use(helmet())
app.use(cors())

//routes
app.use('/api/barrios', barrioRoutes)
app.use('/', (req, res) => {
    res.send({
        message: "Hello World!"
    })
})

export default app
