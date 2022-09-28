const data = [
    {
        title: "easy chicken curry",
        description: "28 Sept 2020 — Seal the chicken in a pan with a little oil. · Add chopped onion and cook for 5 minutes to soften. · Add in garlic, ginger, curry powder, ground ",
        url: "kitchensanctuary.com/easy-chicken-curry/",
        tags: ["how", "to", "make", "curry", "recipes","indian", "food", "chicken"]
    },
    {
        title : "chicken curry recipes | bbc good food",
        description: "Make a warming chicken curry for the perfect Friday night fakeaway. From creamy chicken korma and katsu to spicy tomato-based jalfrezi and ...",
        url: "https://www.bbcgoodfood.com/recipes/collection/chicken-curry-recipes",
        tags : ["how", "to", "make", "curry", "recipes","indian", "food", "chicken", "BBC"]
    },
    {
        title : "spicy chicken curry",
        description: "640 g chicken thigh fillets · 2 tablespoon olive oil · 2 onions cut into chunks · 2 red peppers seeded and cut into chunks · 2 cloves ...",
        url: "https://www.recipesmadeeasy.co.uk/spicy-chicken-curry/",
        tags : ["how", "to", "make", "curry", "easy" ,"recipes","indian", "food", "chicken", "spicy"]
    },
    {
        title : "indian traditional food",
        description: "640 g chicken thigh fillets · 2 tablespoon olive oil · 2 onions cut into chunks · 2 red peppers seeded and cut into chunks · 2 cloves ...",
        url: "https://www.jacadatravel.com/indian-subcontinent/india/travel-guides/10-traditional-must-try-foods-to-eat-in-india/",
        tags : ["how", "to", "make", "traditional" ,"recipes","indian", "food"]
    },
    {
        title : "traditional indian curry recipes",
        description: "Traditional Indian Curries · Dietary · Black Chana Masala · Chana Masala · Chicken Pasanda · Chettinad Chicken · Chicken Jalfrezi · Chicken Pathia · Chicken Tikka.",
        url: "https://www.recipesmadeeasy.co.uk/spicy-chicken-curry/",
        tags : ["how", "to", "make", "curry", "traditional" ,"recipes","indian", "food", "chicken"]
    },
    {
        title : "a step-by-step guide to cooking an authentic indian curry",
        description: "640 g chicken thigh fillets · 2 tablespoon olive oil · 2 onions cut into chunks · 2 red peppers seeded and cut into chunks · 2 cloves ...",
        url: "https://www.recipesmadeeasy.co.uk/spicy-chicken-curry/",
        tags : ["how", "to", "make", "curry", "traditional" , "recipes", "indian", "chicken"]
    },
    {
        title : "indian cuisine ",
        description: "Indian cuisine consists of a variety of regional and traditional cuisines native to India. Given the diversity in soil, climate, culture, ethnic groups, ...",
        url: "https://en.wikipedia.org/wiki/Indian_cuisine",
        tags : ["how", "to", "make","recipes","indian", "food", "cuisine", "traditional"]
    },
    {
        title : "traditional indian dishes ",
        description: "640 g chicken thigh fillets · 2 tablespoon olive oil · 2 onions cut into chunks · 2 red peppers seeded and cut into chunks · 2 cloves ...",
        url: "https://sulaindianrestaurant.com/2019/09/traditional-indian-dishes-that-are-loved-all-across-the-globe/",
        tags : ["how", "to", "make","recipes","indian", "dishes", "traditional"]
    },
    {
        title : "indian food recipes",
        description: "Latest · Featured · Paneer Butter Masala Recipe · Kitchenaid Ice Cream Recipe · Aloo Masala (Potato Masala Recipe) · Poha Chivda Recipe · Ganesh Chaturthi Recipes ...",
        url: "https://www.indianhealthyrecipes.com/recipes/latest-updates/",
        tags : ["how", "to", "make","recipes","indian", "food"]
    },
    {
        title : "spicy indian food",
        description: "640 g chicken thigh fillets · 2 tablespoon olive oil · 2 onions cut into chunks · 2 red peppers seeded and cut into chunks · 2 cloves ...",
        url: "https://www.delicious.com.au/recipes/collections/gallery/60-indian-recipes-to-warm-you-up-this-winter/i66gak0q",
        tags : ["how", "to", "make", "easy" ,"recipes","indian", "food", "spicy"]
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
    },
    {
        title : "fun cat",
        description: "6A site for funny cats",
        url: "https://mashable.com/archive/cat-websites",
        tags : ["pets", "pet", "animal", "fuuny" ,"cats","kitten"]
    },
    {
        title : "the 7 best cat-centric time-wasters on the internet",
        description: "17 Sept 2013 — 1. Catleidoscope · 2. LOLCats · 3. Cat Bounce · 4. Cat Flakes · 5. Bat Cat · 6. Circle the Cat · 7. The A to Z list of cat memes.",
        url: "https://www.catster.com/lifestyle/internet-cat-time-wasters",
        tags : ["pets", "pet", "animal", "fuuny" ,"cats","kitten"]
    },
    {
        title : "kitten",
        description: "A kitten is a juvenile cat. After being born, kittens display primary altriciality and are totally dependent on their mothers for survival.",
        url: "https://en.wikipedia.org/wiki/Kitten",
        tags : ["pets", "pet", "animal", "wikipedia" ,"cats","kitten"]
    },
    {
        title : "dog",
        description: "The dog or domestic dog is a domesticated descendant of the wolf. The dog is derived from an ancient, extinct wolf, and the modern wolf is the dog's nearest ...",
        url: "https://en.wikipedia.org/wiki/Dog",
        tags : ["pets", "pet", "animal", "wikipedia" ,"dog","dogs"]
    },
    {
        title : "cat",
        description: "The cat (Felis catus) is a domestic species of small carnivorous mammal. ... It is the only domesticated species in the family Felidae and is sometimes referred ...",
        url: "https://en.wikipedia.org/wiki/Cat",
        tags : ["pets", "pet", "animal", "wikipedia" ,"cats","felis"]
    },
    {
        title : "puppy",
        description: "A puppy is a juvenile dog. Some puppies can weigh 1-1.5 kg (2.2-3.3 lb), while larger ones can weigh up to 7–11 kg (15–24 lb). All healthy puppies grow ...",
        url: "https://en.wikipedia.org/wiki/Puppy",
        tags : ["pets", "pet", "animal", "wikipedia" ,"puppy","puppies"]
    },
    {
        title : "kitten supplies",
        description: "A kitten is a juvenile cat. After being born, kittens display primary altriciality and are totally dependent on their mothers for survival.",
        url: "https://www.petsathome.com/shop/en/pets/cat/kitten",
        tags : ["pets", "pet", "animal", "supplies" ,"cats","kitten", "kitten food","kitten litter", "kitten beds", "kitten toys"]
    },
    {
        title : "cats supplies",
        description: "A kitten is a juvenile cat. After being born, kittens display primary altriciality and are totally dependent on their mothers for survival.",
        url: "https://www.petsathome.com/shop/en/pets/cat",
        tags : ["pets", "pet", "animal", "supplies" ,"cats","kitten", "cat food","cat litter", "cat beds", "cat toys"]
    },
    {
        title : "pets supplies",
        description: "A kitten is a juvenile cat. After being born, kittens display primary altriciality and are totally dependent on their mothers for survival.",
        url: "https://www.petsathome.com/shop/en/pets",
        tags : ["pets", "pet", "animal", "supplies","dogs","pops" ,"cats","kitten", "pet food","pet litter", "pet beds", "pet toys"]
    },
    {
        title : "best 10 london attractions 2022",
        description: "Best 10 London attractions 2022 · The London Eye · Madame Tussauds London · Warner Bros. Studio Tour London · Buckingham Palace · Tower of London · Emirates",
        url: "https://www.visitlondon.com/things-to-do/sightseeing/london-attraction/top-ten-attractions",
        tags : ["city", "london", "london eye", "tourism","capital city", "uk", "places", "to go"]
    },
    {
        title : "25 best things to do in london england",
        description: "25 Best Things To Do In London (England) ; 2. Westminster. Westminster Abbey Source: Lukasz Pajor / shutterstock Westminster Abbey · 3. Camden ; 4. London Eye.",
        url: "https://www.thecrazytourist.com/25-best-things-to-do-in-london/",
        tags : ["city", "london", "tourism","capital city", "things", "best", "uk", "places", "to go", "england"]
    },
    {
        title : "Best places to visit in Spain: 16 top destinations - The Times",
        description: "places to go in spain and enjoy your hoilday",
        url: "https://www.thetimes.co.uk/travel/destinations/europe/spain/holidays-in-spain-barcelona-seville-andalucia",
        tags : ["travel", "tourism","spain", "things", "best", "barcelona", "places", "to go", "hoilday"]
    },
    {
        title : "Explore Spain Holidays and the Best Places to Visit",
        description: "Explore the trendiest destinations · Madrid, Spain · Seville, Spain · Barcelona, Spain · Malaga, Spain · Bilbao, Spain · San sebastian, Spain · Valencia, Spain · Ibiza, ...",
        url: "https://www.101holidays.co.uk/holiday-destinations-in-spain/",
        tags : ["travel", "tourism","spain", "best", "barcelona", "places","Madrid", "to go", "hoilday", "Malaga"]
    },
    {
        title : "Top 10 Best Holiday Destinations & Resorts in Spain",
        description: "1 Jan 2022 — Top Holiday Resorts & Destinations in Spain · Benidorm – Costa Blanca · Playa del Ingles – Gran Canaria, Canary Islands · Magaluf – Majorca,",
        url: "https://spainist.com/top-10-best-holiday-resorts-destinations-in-spain/",
        tags : ["travel", "tourism","spain", "best", "barcelona", "places","Madrid", "to go", "hoilday", "Malaga"]
    },
    {
        title : "Where to go for holidays with kids in Spain: Best destinations",
        description: "Want to escape the daily grind and routine? Who doesn't think about this once in a while, especially when planning a family holiday? Discover the answers to the questions you ....",
        url: "https://www.spain-holiday.com/Spain/articles/family-holidays-with-children-in-spain",
        tags : ["travel", "tourism","spain","family", "best", "barcelona", "places","Madrid", "to go", "hoilday", "Malaga"]
    },
    {
        title : "Spain hoilday family",
        description: "There is no doubt that in order to provide children with the best holiday can be a challenge. Finding accommodation in an ideal location, taking into consideration amusement parks and making sure that children will be satisfied with the local foo....",
        url: "https://www.spain-holiday.com/Spain/articles/family-holidays-with-children-in-spain",
        tags : ["travel", "tourism","spain","family", "best", "barcelona", "places","Madrid", "to go", "hoilday", "Malaga"]
    },
    {
        title : "The 5 Best Family Holiday Destination in Spain | Other Shores",
        description: "31 Dec 2021 — The Best Family Holiday Destinations In Spain · Tenerife · Ibiza · Marbella · Mallorca · Lanzarote ...",
        url: "https://www.inspiringtravel.co.uk/other-shores/explore/best-family-holiday-destinations-spain/",
        tags : ["travel", "tourism","spain","family", "best", "barcelona", "tenerife","places", "to go", "hoilday"]
    },
    {
        title : "Best European destinations for a family holiday",
        description: "You want to discover Europe with your family and you think that big cities are not for you? We have selected the...",
        url: "https://www.europeanbestdestinations.com/best-of-europe/best-european-destinations-for-a-family-holiday/",
        tags : ["travel", "tourism","european","family", "best","places", "to go", "hoilday"]
    },
    {
        title : "10 best holiday destinations for families in 2022",
        description: "Family holidays are always special – you get to spend quality time together (a rarity if you have teens!) and make unforgettable memories of ....",
        url: "https://www.oliverstravels.com/blog/10-best-holiday-destinations-families-2022/",
        tags : ["travel", "tourism","family", "best","places", "to go", "with kids", "hoilday"]
    },
]

module.exports = data