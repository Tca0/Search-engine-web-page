// define requirement that needed to app start running
const express = require('express')
const app = express()
let cors = require('cors')

app.use(express.json());
app.use(cors())
const {searchByKeyWords, compareTitle} = require('./helpers')
const db = require('./data/dataBase')

app.get('/', (req,res) => {
    console.log("hello app from app");
    res.status(200).send("search engine app running")
})

app.get('/search/:str', (req, res) => {
    const searchStr = req.params.str
    const titleMatchs = compareTitle(searchStr)
    const tagMatchs = searchByKeyWords(searchStr)
    const results = [...titleMatchs, ...tagMatchs]
    res.status(202).send(results)
})

module.exports = app