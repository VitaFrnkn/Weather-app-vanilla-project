//API integration, function will call the data of the city searched and display on the interface
function refreshWeather(response){
    let temperatureElement = document.querySelector("#temperature");
    let temperature = response.data.temperature.current;
    let cityElement = document.querySelector("#city");
    let descriptionElement = document.querySelector("#description");
    let humidityElement = document.querySelector("#humidity-value");
    let windElement = document.querySelector("#wind-value");
    let timeElement = document.querySelector("#time")
    let date = new Date(response.data.time *1000); //date data needs to be formatted

    cityElement.innerHTML = response.data.city;//get the city
    timeElement.innerHTML = formatDate(date); // adding the date and time elements
    descriptionElement.innerHTML = response.data.condition.description; // add description element
    humidityElement.innerHTML = response.data.temperature.humidity; //add humidity details
    windElement.innerHTML = response.data.wind.speed; //add wind details
    temperatureElement.innerHTML = Math.round(temperature); //add rounded temperature
}

// formatting the date
function formatDate(date){
    
    let hour = date.getHours();
    let minute = date.getMinutes();

    if (minute<10){
        minute = `0${minute}`;
    }
    
    let days = ["Sunday","Monday",'Tuesday','Wednesday','Thursday','Friday','Saturday'];
    let day = days[date.getDay()];

    return `${day} ${hour}:${minute}`;
}

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

searchCity("Tokyo");//default city when first opening the app