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
    {
        titel : "best 10 london attractions 2022",
        tags : ["city", "london", "london eye", "tourism","capital city", "uk", "places", "to go"],
        description: "Best 10 London attractions 2022 · The London Eye · Madame Tussauds London · Warner Bros. Studio Tour London · Buckingham Palace · Tower of London · Emirates",
        url: "https://www.visitlondon.com/things-to-do/sightseeing/london-attraction/top-ten-attractions"
    },
    {
        titel : "25 best things to do in london england",
        tags : ["city", "london", "tourism","capital city", "things", "best", "uk", "places", "to go", "england"],
        description: "25 Best Things To Do In London (England) ; 2. Westminster. Westminster Abbey Source: Lukasz Pajor / shutterstock Westminster Abbey · 3. Camden ; 4. London Eye.",
        url: "https://www.thecrazytourist.com/25-best-things-to-do-in-london/"
    },
    {
        titel : "Best places to visit in Spain: 16 top destinations - The Times",
        tags : ["travel", "tourism","spain", "things", "best", "barcelona", "places", "to go", "hoilday"],
        description: "places to go in spain and enjoy your hoilday",
        url: "https://www.thetimes.co.uk/travel/destinations/europe/spain/holidays-in-spain-barcelona-seville-andalucia"
    },
    {
        titel : "Explore Spain Holidays and the Best Places to Visit",
        tags : ["travel", "tourism","spain", "best", "barcelona", "places","Madrid", "to go", "hoilday", "Malaga"],
        description: "Explore the trendiest destinations · Madrid, Spain · Seville, Spain · Barcelona, Spain · Malaga, Spain · Bilbao, Spain · San sebastian, Spain · Valencia, Spain · Ibiza, ...",
        url: "https://www.101holidays.co.uk/holiday-destinations-in-spain/"
    },
    {
        titel : "Top 10 Best Holiday Destinations & Resorts in Spain",
        tags : ["travel", "tourism","spain", "best", "barcelona", "places","Madrid", "to go", "hoilday", "Malaga"],
        description: "1 Jan 2022 — Top Holiday Resorts & Destinations in Spain · Benidorm – Costa Blanca · Playa del Ingles – Gran Canaria, Canary Islands · Magaluf – Majorca,",
        url: "https://spainist.com/top-10-best-holiday-resorts-destinations-in-spain/"
    },
    {
        titel : "Where to go for holidays with kids in Spain: Best destinations",
        tags : ["travel", "tourism","spain","family", "best", "barcelona", "places","Madrid", "to go", "hoilday", "Malaga"],
        description: "Want to escape the daily grind and routine? Who doesn't think about this once in a while, especially when planning a family holiday? Discover the answers to the questions you ....",
        url: "https://www.spain-holiday.com/Spain/articles/family-holidays-with-children-in-spain"
    },
    {
        titel : "Spain hoilday family",
        tags : ["travel", "tourism","spain","family", "best", "barcelona", "places","Madrid", "to go", "hoilday", "Malaga"],
        description: "There is no doubt that in order to provide children with the best holiday can be a challenge. Finding accommodation in an ideal location, taking into consideration amusement parks and making sure that children will be satisfied with the local foo....",
        url: "https://www.spain-holiday.com/Spain/articles/family-holidays-with-children-in-spain"
    },
    {
        titel : "The 5 Best Family Holiday Destination in Spain | Other Shores",
        tags : ["travel", "tourism","spain","family", "best", "barcelona", "tenerife","places", "to go", "hoilday"],
        description: "31 Dec 2021 — The Best Family Holiday Destinations In Spain · Tenerife · Ibiza · Marbella · Mallorca · Lanzarote ...",
        url: "https://www.inspiringtravel.co.uk/other-shores/explore/best-family-holiday-destinations-spain/"
    },
    {
        titel : "Best European destinations for a family holiday",
        tags : ["travel", "tourism","european","family", "best","places", "to go", "hoilday"],
        description: "You want to discover Europe with your family and you think that big cities are not for you? We have selected the...",
        url: "https://www.europeanbestdestinations.com/best-of-europe/best-european-destinations-for-a-family-holiday/"
    },
    {
        titel : "10 best holiday destinations for families in 2022",
        tags : ["travel", "tourism","family", "best","places", "to go", "with kids", "hoilday"],
        description: "Family holidays are always special – you get to spend quality time together (a rarity if you have teens!) and make unforgettable memories of ....",
        url: "https://www.oliverstravels.com/blog/10-best-holiday-destinations-families-2022/"
    },
]

module.exports = { data }