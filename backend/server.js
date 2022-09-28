// define requirement that needed to app start running
const express = require('express')
const app = express()
let cors = require('cors')
app.use(cors())
const {searchByKeyWords, compareTitle} = require('./helpers')

app.get('/', (req,res) => {
    console.log("hello app from app");
    res.status(200).send("search engine app running")
})

app.get('/search/:str', (req, res) => {
    const searchStr = req.params.str
    console.log(`***** main app ****\n hitting sreach for: \n ${searchStr}`);
    const results = searchByKeyWords(searchStr)
    console.log("results from app");
    console.log(results);

    const arr = compareTitle(searchStr)
    //console.log(arr)

    res.end()
})

module.exports = app