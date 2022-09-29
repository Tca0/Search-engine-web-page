const ip = 'http://localhost:3000'

const searchInput = document.getElementById('searchInput')
const resultsBtn = document.getElementById('apiResults')
const luyckyResults = document.getElementById('luyckyResults')
const resultsContainer = document.querySelector('.results')
const formSearch = document.querySelector('form')
let res

// fetch data from api
const getSearchResults = async (str) => {
    const rawData = await fetch(`${ip}/search/${str}`)
    // console.log(rawData);
    res = await rawData.json()
    console.log(res[0]);
    res.forEach(element => {
        // creating a div container for individual results
        const result = document.createElement('div')
        // creating anchor tage to loink to the results
        const linkTo = document.createElement('a')
        linkTo.setAttribute('href', element.url)
        linkTo.setAttribute('target',"_blank")
        // creating a title for a result
        const title = document.createElement('h2')
        title.textContent = element.title
        // append header to the anchor tag
        linkTo.appendChild(title);
        // append the header link to the div container
        result.appendChild(linkTo)
        // create a p tage for description
        const description = document.createElement('p')
        description.textContent = element.description
        // append description to the div result
        result.appendChild(description)
        // add results to main body
        resultsContainer.appendChild(result)
    })
}

formSearch.addEventListener('submit', (e) => {
    e.preventDefault()
    resultsContainer.innerHTML = ""
    const searchFor = searchInput.value;
    if(!searchFor) {
        window.alert('type somthing to search:')
    } else {
        getSearchResults(searchFor)
    }
})

resultsBtn.addEventListener('click', (e) => {
    e.preventDefault()
    resultsContainer.innerHTML = ""
    const searchFor = searchInput.value;
    if(!searchFor) {
        window.alert('type somthing to search:')
    } else {
        getSearchResults(searchFor)
    }
})



luyckyResults.addEventListener('click', () => {
    if(!res) {
        window.alert('search for something first')
    } else {
        const randomResults = Math.floor(Math.random()*res.length)
        window.open(res[randomResults].url, '_blank').focus();
    }
    

})