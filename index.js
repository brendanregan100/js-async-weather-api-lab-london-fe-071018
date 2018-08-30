const API_KEY = "fd6778d4febe931b004d4ca0cdf194be"

function handleFormSubmit(event) {
  event.preventDefault();
  event.stopPropagation && event.stopPropagation();
  const city = document.getElementById("city").value.replace(/ /g, "+");
  fetchCurrentWeather(city);
  fetchFiveDayForecast(city);
}

function fetchCurrentWeather(city) {
  fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=${API_KEY}`)  
  .then(resp => resp.json())
  .then(json => displayCurrentWeather(json))
  .catch(error => console.log(error))
}

function displayCurrentWeather(json) {
  //render current weather data to the DOM using provided IDs and json from API
  document.getElementById("temp").innerHTML = json.main.temp;
  document.getElementById("low").innerHTML = json.main.temp_min;
  document.getElementById("high").innerHTML = json.main.temp_max;
  document.getElementById("humidity").innerHTML = json.main.humidity;
  document.getElementById("cloudCover").innerHTML = json.main.clouds.all;
}

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
  document.getElementById("submit").addEventListener("click") handleFormSubmit);
})

