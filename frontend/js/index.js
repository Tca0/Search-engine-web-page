const ip = 'http://localhost:3000'

const searchInput = document.getElementById('searchInput')
const resultsBtn = document.getElementById('apiResults')
// const resultsBtn2 = document.getElementById('results1')
const resultsContainer = document.querySelector('.results')

console.log(searchInput.value);

// fetch data from api
const getSearchResults = async (str) => {
    const rawData = await fetch(`${ip}/search/${str}`)
    // console.log(rawData);
    const res = await rawData.json()
    console.log(res);
    res.forEach(element => {
        // creating a div container for individual results
        const result = document.createElement('div')
        // creating anchor tage to loink to the results
        const linkTo = document.createElement('a')
        linkTo.setAttribute('href', element.url)
        // creating a title for a result
        const title = document.createElement('h2')
        title.textContent = element.title
    })
}



resultsBtn.addEventListener('click', () => {
    console.log(searchInput.value);
    const searchFor = searchInput.value;
    getSearchResults(searchFor)
})