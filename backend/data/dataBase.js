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
        title: "Where Does Vanilla Extract Come From?",
        description: "Look for whole beans that are fat, shiny, and moist. While Madagascar produces approximately half of the world's crop, vanilla also comes from Mexico, French Polynesia, Uganda, China, and Indonesia, among other countries, and will have different flavor profiles depending on place of origin.",
        url: "https://www.bonappetit.com/story/where-does-vanilla-extract-come-from#:~:text=Look%20for%20whole%20beans%20that,depending%20on%20place%20of%20origin.",
        tags: ["food", "vanilla", "extract", "bon appetit", "ice cream"]
    },
    {
        title: "List of UEFA European Championship finals",
        description: "Germany and Spain are the most successful teams in the history of the tournament, winning three times each. Italy and France have each won the competition twice (the only other teams to have won the competition more than once), while Yugoslavia qualified for the final twice without success.",
        url: "https://en.wikipedia.org/wiki/List_of_UEFA_European_Championship_finals#:~:text=Germany%20and%20Spain%20are%20the,the%20final%20twice%20without%20success.",
        tags: ["sport", "football", "soccer", "uefa", "euro", "final", "champion"]
    },
    {
        title: "What should my daily intake of calories be?",
        description: "Generally, the recommended daily calorie intake is 2,000 calories a day for women and 2,500 for men.",
        url: "https://www.nhs.uk/common-health-questions/food-and-diet/what-should-my-daily-intake-of-calories-be/#:~:text=Generally%2C%20the%20recommended%20daily%20calorie,women%20and%202%2C500%20for%20men.",
        tags: ["food", "health", "eat", "nhs", "calorie", "how many"]
    },
    {
        title: "How Many Seconds Are In a Year?",
        description: "So…drum roll, please…one year would equal 365 times 24 times 60 times 60 seconds…or 31,536,000 seconds! That's over 31 million seconds you ...",
        url: "https://wonderopolis.org/wonder/how-many-seconds-are-in-a-year",
        tags: ["time", "second", "minute", "hour", "year"]
    },
    {
        title: "How many people live in the UK?",
        description: "How many people live in the UK? ... The latest ONS mid-year estimates suggest the UK population has reached 67 million for the first time. But the ...",
        url: "https://blog.ons.gov.uk/2021/06/25/how-many-people-live-in-the-uk/",
        tags: ["population", "UK", "ONS", "people", "live", "statistic"]
    },
    {
        title: "Dune (2021)",
        description: "A noble family becomes embroiled in a war for control over the galaxy's most valuable asset while its heir becomes troubled by visions of a dark future.",
        url: "https://www.imdb.com/title/tt1160419/",
        tags: ["Dune", "imdb", "movie", "film"]
    },
    {
        title: "Every Marvel Studios Movie and Disney+ Project in 2022",
        description: "MCU Tie-In: Dominique Thorne (“Judas and the Black Messiah”) will originate the role of Riri Williams before she appears in the Disney Plus series “Ironheart.” ...",
        url: "https://variety.com/lists/marvel-studios-release-schedule/",
        tags: ["marvel", "variety", "mcu", "movie", "film", "disney", "avenger"]
    },
    {
        title: "List of James Bond films",
        description: "1.1 Dr. No (1962) · 1.2 From Russia with Love (1963) · 1.3 Goldfinger (1964) · 1.4 Thunderball (1965) · 1.5 You Only Live Twice (1967) · 1.6 On Her Majesty's Secret ...",
        url: "https://en.wikipedia.org/wiki/List_of_James_Bond_films",
        tags: ["wiki", "james bond", "007", "film", "movie"]
    },
    {
        title: "Home - The Championships, Wimbledon",
        description: "Official homepage of The Championships, Wimbledon 2022.",
        url: "https://www.wimbledon.com/",
        tags: ["sport", "tennis", "wimbledon", "champion"]
    },
    {
        title: "The official site of the NBA for the latest NBA Scores, Stats ...",
        description: "The official site of the National Basketball Association. Follow the action on NBA scores, schedules, stats, news, Team and Player news.",
        url: "https://www.nba.com/",
        tags: ["sport", "basketball", "nba", "team", "stat", "news"]
    },
    {
        title: "Met Office: Weather and climate change",
        description: "Met Office weather forecasts for the UK. World leading weather services for the public.",
        url: "https://www.metoffice.gov.uk/",
        tags: ["met", "weather", "forecast", "UK", "world", "climate"]
    },
    {
        title: "Sky Sports - Sports News, Transfers, Scores | Watch Live ...",
        description: "Watch the best live coverage of your favourite sports: Football, Golf, Rugby, Cricket, F1, Boxing, NFL, NBA, plus the latest sports news, transfers & scores.",
        url: "https://www.skysports.com/",
        tags: ["sport", "sky", "football", "golf", "rugby", "cricket", "news", "live"]
    },
    {
        title: "Home - BBC News",
        description: "BBC News provides trusted World and UK news as well as local and regional perspectives. Also entertainment, business, science, technology and health news.",
        url: "https://www.bbc.co.uk/news",
        tags: ["bbc", "news", "business", "entertainment", "technology"]
    }
]

module.exports = { data }