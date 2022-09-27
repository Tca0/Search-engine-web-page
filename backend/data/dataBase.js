const keywords = {
    "food": ['fruits', 'vegetables', 'apple', 'orange', 'bakery', 'grocery', 'meat', 'sugar'],
    "countries": ['UK', 'population', 'Europe', 'kingdom', 'asia', 'america', 'africa'],
    "animals": ['dog', 'cat', 'pet', 'wild', 'domestic', 'wolf', 'bear'],
    "books": ['author', 'hardback', 'paperback', 'amazon', 'kindle', 'fiction', 'biography'],
    "movies": ['theatre', 'horror', 'genre', 'action', 'romance', 'fantasy']
}

const data = {
    "food": [
        {
            result: 'Pancake recipes',
            link: 'https://bbcfood.co.uk/'
        },
        {
            result: 'Another link',
            link: '/'
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