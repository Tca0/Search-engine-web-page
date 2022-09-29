// define requirement that needed to app start running
const express = require('express')
const app = express()
let cors = require('cors')


app.use(cors())
const bodyParser = require('body-parser');
app.use(bodyParser.json());

const {searchByKeyWords, compareTitle} = require('./helpers')


app.get('/', (req,res) => {
    // console.log("hello app from app");
    res.status(200).send("search engine app running")
})

app.get('/search/:str', (req, res) => {
    const searchStr = req.params.str
    const titleMatchs = compareTitle(searchStr)
    const tagMatchs = searchByKeyWords(searchStr)
    let results = [...titleMatchs, ...tagMatchs]
    results = [...new Set(results)]
    if(results)
        res.status(202).send(results)
    else
        res.status(204)
})

module.exports = app