const db = require('./data/database')


let matchingSearchByWords = []
function searchByKeyWords(searchStr) {
    matchingSearchByWords = []
    console.log("----- Search by tags function -----\n");
    // loop through all data indexes
    // compare the tags array with the searchStr words
    // if searchStr includes one of the tages then increase numberOfMatches 
    db.forEach((element, index) => {
        // split the search sentence and compare it with tags
        const words = searchStr.split(" ")
        let numberOfMatches = 0
        element.tags.forEach(tag => {
            words.forEach(word => {
                if(tag == word.toLowerCase()) {
                    numberOfMatches++
                }
            })
        })
        // if there is a keywords matching then pushed to matchingSearchByWords array
        if(numberOfMatches>0) {
            matchingSearchByWords.push({
                index,
                "matchs": numberOfMatches
            })
        }
    })
    matchingSearchByWords.sort((a,b) => b.matchs - a.matchs)
    return matchingSearchByWords
}

function compareTitle(query){
    const words = query.split(' ')
    const matches = []

    db.forEach((element, index) => {
        let count = 0
        const titleArr = element.title.split(' ')

        // compare data title to each word in search query
        words.forEach(word => {
            if(titleArr.includes(word))
                count += 1
        })

        if(count > 0){
            matches.push({index, count})
        }
    })

    return matches
}

module.exports = {searchByKeyWords, compareTitle}