//adding search engine and replacing h1 with the submitted search
function handleSearch(event){
    event.preventDefault();
    let searchInput = document.querySelector('#search-form-input');
    let cityElement = document.querySelector('#city');
    cityElement.innerHTML = searchInput.value;
}
let searchFormElement = document.querySelector('#search-form');
searchFormElement.addEventListener("submit", handleSearch);

//display the temperature of the searched city, integrating API

