const api = require("./index")

// routes
app.get('/', (req, res) => {
    res.send({
        message: "Hello World!"
    })
})

app.get('/home', (req, res) => {
    res.send([
        {
            message: "This is a home page"
        }
    ])
})