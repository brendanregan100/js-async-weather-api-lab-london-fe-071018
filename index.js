const API_KEY = "fd6778d4febe931b004d4ca0cdf194be"

function handleFormSubmit(event) {
  document.getElementById("cityForm").addEventListener("click", fetchCurrentWeather)
}

function fetchCurrentWeather(city) {
  fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=${API_KEY}`)  
  .then(resp => resp.json())
  .then(json => console.log(json))
  .catch(error => console.log(error))
}

function displayCurrentWeather(json) {
  //render current weather data to the DOM using provided IDs and json from API
  document.getElementById("temp").innerHTML = json.main
  document.getElementById("temp").innerHTML = json.main
  document.getElementById("temp").innerHTML = json.main
  document.getElementById("temp").innerHTML = json.main
  document.getElementById("temp").innerHTML = json.main
  document.getElementById("temp").innerHTML = json.main
  
function fetchFiveDayForecast(city) {
  //fetch five day forecast data based on city
  fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city}`)
  .then(resp => resp.json())
  .then(json => console.log(json));
}

function displayFiveDayForecast(json) {
  //render five day forecast data to the DOM using provided IDs and json from API
}

function createChart(json) {
  //Bonus: render temperature chart using five day forecast data and ChartJS
}

document.addEventListener('DOMContentLoaded', function() {
  //add event listener here for form submission
})
