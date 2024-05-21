const express = require('express')
const cors = require('cors')
const app = express()

app.use(cors())

const port = 3001

app.get('/', (req, res) => {
    res.send('Hello world')
})

app.listen(port, () => {
    console.log(`Listening on port ${port}`)
})
