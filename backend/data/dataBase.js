// Examples:
//  - How far is Asia from London
//  - How to make curry
//  - 

// const keywords = {
//     "food": ['fruits', 'vegetables', 'apple', 'orange', 'bakery', 'grocery', 'meat', 'sugar', 'how to make', 'recipes'],
//     "countries": ['UK', 'population', 'Europe', 'kingdom', 'asia', 'america', 'africa', 'how far'],
//     "animals": ['dog', 'cat', 'pet', 'wild', 'domestic', 'wolf', 'bear'],
//     "books": ['author', 'hardback', 'paperback', 'amazon', 'kindle', 'fiction', 'biography'],
//     "movies": ['theatre', 'horror', 'genre', 'action', 'romance', 'fantasy'],
// }

// const data = {
//     "food": [
//         {
//             result: 'Pancake recipes',
//             "tags" : ["pancake", "recpies", food, bakery, desserts]
//             link: 'https://bbcfood.co.uk/',
//             tags: ['pancake']
//         },
//         {
//             result: 'Another link',
//             link: '/',
//             tags: ['curry', 'indian']
//         },
//         {
//             result: 'Another link',
//             link: '/'
//         },
//     ],
//     tagmactgarray = [
//         {
//             "dataEleIndex": this.data.indexof
//             matchtags: 1
//         }, {
//             "dataEle": {
//                 result: 'Pancake recipes book',
//                 link: 'https://bbcfood.co.uk/',
//                 tags: ['pancake']
//             },
//             matchtags: 3
//         }
//     ]
//     "countries": [
//         {
//             result: 'About Europe',
//             link: 'https://wikipedia.co.uk/'
//         },
//         {
//             result: 'Another link',
//             link: '/'
//         },
//         {
//             result: 'Another link',
//             link: '/'
//         },
//     ]
// }

const data = [
    {
        title: "easy chicken curry",
        tags: ["how", "to", "make", "curry", "recipes","indian", "food", "chicken"],
        description: "28 Sept 2020 — Seal the chicken in a pan with a little oil. · Add chopped onion and cook for 5 minutes to soften. · Add in garlic, ginger, curry powder, ground ",
        url: "kitchensanctuary.com/easy-chicken-curry/"
    },
    {
        titel : "chicken curry recipes | bbc good food",
        tags : ["how", "to", "make", "curry", "recipes","indian", "food", "chicken", "BBC"],
        description: "Make a warming chicken curry for the perfect Friday night fakeaway. From creamy chicken korma and katsu to spicy tomato-based jalfrezi and ...",
        url: "https://www.bbcgoodfood.com/recipes/collection/chicken-curry-recipes"
    },
    {
        titel : "spicy chicken curry",
        tags : ["how", "to", "make", "curry", "easy" ,"recipes","indian", "food", "chicken", "spicy"],
        description: "640 g chicken thigh fillets · 2 tablespoon olive oil · 2 onions cut into chunks · 2 red peppers seeded and cut into chunks · 2 cloves ...",
        url: "https://www.recipesmadeeasy.co.uk/spicy-chicken-curry/"
    },
    {
        titel : "indian traditional food",
        tags : ["how", "to", "make", "traditional" ,"recipes","indian", "food"],
        description: "640 g chicken thigh fillets · 2 tablespoon olive oil · 2 onions cut into chunks · 2 red peppers seeded and cut into chunks · 2 cloves ...",
        url: "https://www.jacadatravel.com/indian-subcontinent/india/travel-guides/10-traditional-must-try-foods-to-eat-in-india/"
    },
    {
        titel : "traditional indian curry recipes",
        tags : ["how", "to", "make", "curry", "traditional" ,"recipes","indian", "food", "chicken"],
        description: "Traditional Indian Curries · Dietary · Black Chana Masala · Chana Masala · Chicken Pasanda · Chettinad Chicken · Chicken Jalfrezi · Chicken Pathia · Chicken Tikka.",
        url: "https://www.recipesmadeeasy.co.uk/spicy-chicken-curry/"
    },
    {
        titel : "a step-by-step guide to cooking an authentic indian curry",
        tags : ["how", "to", "make", "curry", "traditional" ,"recipes","indian",, "chicken"],
        description: "640 g chicken thigh fillets · 2 tablespoon olive oil · 2 onions cut into chunks · 2 red peppers seeded and cut into chunks · 2 cloves ...",
        url: "https://www.recipesmadeeasy.co.uk/spicy-chicken-curry/"
    },
    {
        titel : "indian cuisine ",
        tags : ["how", "to", "make","recipes","indian", "food", "cuisine", "traditional"],
        description: "Indian cuisine consists of a variety of regional and traditional cuisines native to India. Given the diversity in soil, climate, culture, ethnic groups, ...",
        url: "https://en.wikipedia.org/wiki/Indian_cuisine"
    },
    {
        titel : "traditional indian dishes ",
        tags : ["how", "to", "make","recipes","indian", "dishes", "traditional"],
        description: "640 g chicken thigh fillets · 2 tablespoon olive oil · 2 onions cut into chunks · 2 red peppers seeded and cut into chunks · 2 cloves ...",
        url: "https://sulaindianrestaurant.com/2019/09/traditional-indian-dishes-that-are-loved-all-across-the-globe/"
    },
    {
        titel : "indian food recipes",
        tags : ["how", "to", "make","recipes","indian", "food"],
        description: "Latest · Featured · Paneer Butter Masala Recipe · Kitchenaid Ice Cream Recipe · Aloo Masala (Potato Masala Recipe) · Poha Chivda Recipe · Ganesh Chaturthi Recipes ...",
        url: "https://www.indianhealthyrecipes.com/recipes/latest-updates/"
    },
    {
        titel : "spicy indian food",
        tags : ["how", "to", "make", "easy" ,"recipes","indian", "food", "spicy"],
        description: "640 g chicken thigh fillets · 2 tablespoon olive oil · 2 onions cut into chunks · 2 red peppers seeded and cut into chunks · 2 cloves ...",
        url: "https://www.delicious.com.au/recipes/collections/gallery/60-indian-recipes-to-warm-you-up-this-winter/i66gak0q"
    },
    {
        titel : "fun cat",
        tags : ["pets", "pet", "animal", "fuuny" ,"cats","kitten"],
        description: "6A site for funny cats",
        url: "https://mashable.com/archive/cat-websites"
    },
    {
        titel : "the 7 bbest cat-centric time-wasters on the internet",
        tags : ["pets", "pet", "animal", "fuuny" ,"cats","kitten"],
        description: "17 Sept 2013 — 1. Catleidoscope · 2. LOLCats · 3. Cat Bounce · 4. Cat Flakes · 5. Bat Cat · 6. Circle the Cat · 7. The A to Z list of cat memes.",
        url: "https://www.catster.com/lifestyle/internet-cat-time-wasters"
    },
    {
        titel : "kitten",
        tags : ["pets", "pet", "animal", "wikipedia" ,"cats","kitten"],
        description: "A kitten is a juvenile cat. After being born, kittens display primary altriciality and are totally dependent on their mothers for survival.",
        url: "https://en.wikipedia.org/wiki/Kitten"
    },
    {
        titel : "dog",
        tags : ["pets", "pet", "animal", "wikipedia" ,"dog","dogs"],
        description: "The dog or domestic dog is a domesticated descendant of the wolf. The dog is derived from an ancient, extinct wolf, and the modern wolf is the dog's nearest ...",
        url: "https://en.wikipedia.org/wiki/Dog"
    },
    {
        titel : "cat",
        tags : ["pets", "pet", "animal", "wikipedia" ,"cats","felis"],
        description: "The cat (Felis catus) is a domestic species of small carnivorous mammal. ... It is the only domesticated species in the family Felidae and is sometimes referred ...",
        url: "https://en.wikipedia.org/wiki/Cat"
    },
    {
        titel : "puppy ",
        tags : ["pets", "pet", "animal", "wikipedia" ,"puppy","puppies"],
        description: "A puppy is a juvenile dog. Some puppies can weigh 1-1.5 kg (2.2-3.3 lb), while larger ones can weigh up to 7–11 kg (15–24 lb). All healthy puppies grow ...",
        url: "https://en.wikipedia.org/wiki/Puppy"
    },
    {
        titel : "kitten suppliese",
        tags : ["pets", "pet", "animal", "supplies" ,"cats","kitten", "kitten food","kitten litter", "kitten beds", "kitten toys"],
        description: "A kitten is a juvenile cat. After being born, kittens display primary altriciality and are totally dependent on their mothers for survival.",
        url: "https://www.petsathome.com/shop/en/pets/cat/kitten"
    },
    {
        titel : "cats suppliese",
        tags : ["pets", "pet", "animal", "supplies" ,"cats","kitten", "cat food","cat litter", "cat beds", "cat toys"],
        description: "A kitten is a juvenile cat. After being born, kittens display primary altriciality and are totally dependent on their mothers for survival.",
        url: "https://www.petsathome.com/shop/en/pets/cat"
    },
    {
        titel : "pets suppliese",
        tags : ["pets", "pet", "animal", "supplies","dogs","pops" ,"cats","kitten", "pet food","pet litter", "pet beds", "pet toys"],
        description: "A kitten is a juvenile cat. After being born, kittens display primary altriciality and are totally dependent on their mothers for survival.",
        url: "https://www.petsathome.com/shop/en/pets"
    },
]

module.exports = { data }