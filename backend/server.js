// define requirement that needed to app start running
const express = require('express')
const app = express()
let cors = require('cors')
app.use(cors())
const {searchByKeyWords, compareTitle} = require('./helpers')
const db = require('./data/dataBase')

app.get('/', (req,res) => {
    console.log("hello app from app");
    res.status(200).send("search engine app running")
})

app.get('/search/:str', (req, res) => {
    const searchStr = req.params.str
    console.log(`***** main app ****\n hitting sreach for: \n ${searchStr}`);
    // search by title key words
    let titleMatchs = compareTitle(searchStr)
    console.log("results by title");
    console.log(titleMatchs)
    // search by tags key words
    const tagMatchs = searchByKeyWords(searchStr)
    console.log("results by tags");
    console.log(tagMatchs);
    let results = []
    titleMatchs.forEach(ele => {
        // console.log(ele.index);
        results.push(db[ele.index])
    })
    tagMatchs.forEach(ele => {
        // console.log(ele.index);
        results.push(db[ele.index])
    })
    console.log(`The final response is:`);
    console.log(results);
    res.status(202).send(results)
})

module.exports = app