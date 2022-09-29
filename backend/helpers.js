const db = require('./data/database')



let matchingSearchByWords = []


const deleteObjectKey = (arrayOfobjects) => { 
    let arrayOfResults = []
    arrayOfobjects.forEach(object => {
        arrayOfResults.push(object.element)
    })
    return arrayOfResults
}

const compareTwoArraysOfWords = (titleWords,arrayOfWords,count) => {
    titleWords.forEach(titleWord => {
        arrayOfWords.forEach(word => {
            if (titleWord.toLowerCase() == word.toLowerCase())
                count++
        })
    })
    return count
}

function searchByKeyWords(searchStr) {
    matchingSearchByWords = []
    // loop through all data indexes
    // compare the tags array with the searchStr words
    // if searchStr includes one of the tages then increase numberOfMatches 
    db.forEach(element => {
        // split the search sentence and compare it with tags
        const searchWords = searchStr.split(" ")
        let count = 0
        count = compareTwoArraysOfWords(searchWords, element.tags,0)
        // if there is a keywords matching then pushed to matchingSearchByWords array
        if(count>0)
            matchingSearchByWords.push({element,count})
    })
    matchingSearchByWords.sort((a,b) => b.count - a.count)
    // console.log(`array after sorting \n`, matchingSearchByWords);
    matchingSearchByWords = deleteObjectKey(matchingSearchByWords)
    return matchingSearchByWords
}

function compareTitle(query) {
    const words = query.split(' ')
    let matches = []

    db.forEach(element => {
        let count = 0
        const titleArr = element.title.split(' ')
        count = compareTwoArraysOfWords(words, titleArr, 0)
        if(count > 0)
            matches.push({element, count});
    })
    matches = deleteObjectKey(matches)
    return matches
}

module.exports = {searchByKeyWords, compareTitle}