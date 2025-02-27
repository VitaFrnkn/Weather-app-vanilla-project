function refreshWeather(response){
    let temperatureElement = document.querySelector("#temperature");
    let temperature = response.data.temperature.current;
    let cityElement = document.querySelector("#city");

    cityElement.innerHTML = response.data.city;
    temperatureElement.innerHTML = Math.round(temperature);
}

//display the temperature of the searched city, integrating API

function searchCity(city){
    //make api call and update interface
    let apiKey = "oe1f0572f4bt753a71ffbc4045676795";
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
    axios.get(apiUrl).then(refreshWeather);
}

//adding search engine and replacing h1 with the submitted search
function handleSearch(event){
    event.preventDefault();
    let searchInput = document.querySelector('#search-form-input');
    searchCity(searchInput.value);
}
let searchFormElement = document.querySelector('#search-form');
searchFormElement.addEventListener("submit", handleSearch);

