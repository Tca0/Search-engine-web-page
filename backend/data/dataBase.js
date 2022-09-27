// Examples:
//  - How far is Asia from London
//  - How to make curry
//  - 

const keywords = {
    "food": ['fruits', 'vegetables', 'apple', 'orange', 'bakery', 'grocery', 'meat', 'sugar', 'how to make', 'recipes'],
    "countries": ['UK', 'population', 'Europe', 'kingdom', 'asia', 'america', 'africa', 'how far'],
    "animals": ['dog', 'cat', 'pet', 'wild', 'domestic', 'wolf', 'bear'],
    "books": ['author', 'hardback', 'paperback', 'amazon', 'kindle', 'fiction', 'biography'],
    "movies": ['theatre', 'horror', 'genre', 'action', 'romance', 'fantasy'],
}

const data = {
    "food": [
        {
            result: 'Pancake recipes',
            link: 'https://bbcfood.co.uk/',
            tags: ['pancake']
        },
        {
            result: 'Another link',
            link: '/',
            tags: ['curry', 'indian']
        },
        {
            result: 'Another link',
            link: '/'
        },
    ],
    
    "countries": [
        {
            result: 'About Europe',
            link: 'https://wikipedia.co.uk/'
        },
        {
            result: 'Another link',
            link: '/'
        },
        {
            result: 'Another link',
            link: '/'
        },
    ]
}

module.exports = {keywords, data}