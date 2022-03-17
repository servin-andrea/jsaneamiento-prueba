const express = require('express')
const helmet = require("helmet")
const cors = require("cors")

const app = express()

//middlewares
app.use(express.json())
app.use(express.urlencoded( {extended:false }))
app.use(helmet())
app.use(cors())

// routes
app.get('/', (req, res) => {
    res.send({
        message: "Hello World!"
    })
})

app.get('/about', (req, res) => res.send('About Page Route'));
app.get('/portfolio', (req, res) => res.send('Portfolio Page Route'));
app.get('/contact', (req, res) => res.send('Contact Page Route'));

app.get('/products', (req, res) => {
    res.send([
        {
            id: 1,
            name: "product1"
        },
        {
            id: 2,
            name: "product2"
        },
        {
            id: 3,
            name: "product3"
        }
    ])
})

// initialize server
app.listen(
    app.get(4000), () => { 
        console.log(`\nready - started server on http://localhost:4000\n`) 
    }
)

module.exports = app