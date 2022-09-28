const ip = 'http://localhost:3000'

const searchInput = document.getElementById('searchInput')
const resultsBtn = document.getElementById('apiResults')
const luyckyResults = document.getElementById('luyckyResults')
const resultsContainer = document.querySelector('.results')

let res

// fetch data from api
const getSearchResults = async (str) => {
    const rawData = await fetch(`${ip}/search/${str}`)
    // console.log(rawData);
    res = await rawData.json()
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



resultsBtn.addEventListener('click', (e) => {
    e.preventDefault()
    resultsContainer.innerHTML = ""
    console.log(searchInput.value);
    const searchFor = searchInput.value;
    getSearchResults(searchFor)
})


luyckyResults.addEventListener('click', () => {
    console.log(res);
    const randomResults = Math.floor(Math.random()*res.length)
    console.log(res[randomResults].url);
    window.open(res[randomResults].url, '_blank').focus();

})