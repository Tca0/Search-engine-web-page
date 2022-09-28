// define requirement that needed to app start running
const express = require('express')
const app = express()
let cors = require('cors')
app.use(cors())

const compareTitle = require('./controllers/routes')

app.get('/', (req,res) => {
    console.log("hello app from app");
    res.status(200).send("search engine app running")
})

app.get('/search/:query', (req, res) => {
    const arr = compareTitle(req.params.query)
    console.log(arr)
    res.status(200).send(`You searched for '${req.params.query}'`)
})

module.exports = app

