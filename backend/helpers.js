const db = require('./data/database')

let matchingSearchByWords = []
function searchByKeyWords(searchStr) {
    // console.log(`dataBase :`);
    // console.log((db));
    console.log("----- Search by tags function -----\n");
    // loop through all data indexes
    // compare the tags array with the searchStr
    // if searchStr includes one of the tages then increase numberOfMatches 
    db.forEach(element => {
        let numberOfMatches = 0
        // console.log(`element in data: \n`);
        // console.log(element);
        // console.log(element.tags);
        element.tags.forEach(tag => {
            // console.log(`tag in element: ${tag}`);
            if(searchStr.includes(tag)) {
                // console.log("matchimng in a tag");
                numberOfMatches++
            }
        })
        // console.log(`Number of matchs with the element in index ${db.indexOf(element)} is : ${numberOfMatches}`);
        // if there is a keywords matching then pushed to matchingSearchByWords array
        if(numberOfMatches>0) {
            matchingSearchByWords.push({
                "elemIndex": db.indexOf(element),
                "matchs": numberOfMatches
            })
        }
    })
    console.log("before sorting:");
    console.log(matchingSearchByWords);
    matchingSearchByWords.sort((a,b) => b.matchs - a.matchs)
    console.log("afetr sorting:");
    console.log(matchingSearchByWords); 
    return matchingSearchByWords
}

function compareTitle(query){
    const words = query.split(' ')
    const matches = []

    data.forEach((element, index) => {
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