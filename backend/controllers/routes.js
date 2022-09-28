const { data } = require('../data/dataBase')

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

module.exports = compareTitle