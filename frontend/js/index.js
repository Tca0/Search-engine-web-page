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
    
}



resultsBtn.addEventListener('click', () => {
    console.log(searchInput.value);
    const searchFor = searchInput.value;
    getSearchResults(searchFor)
})