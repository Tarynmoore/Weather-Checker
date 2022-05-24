var userInputEl = document.querySelector("#userInput")
var searchFormEl = document.querySelector("#btn")
var singleForecastEl = document.querySelector("#singleDayContainer");
// var weatherHistory = []
var citiesContatinerEl = document.querySelector("#cities-container")
var UScities = document.querySelector(".data-city");
var singleTempEl = document.querySelector("#singleTemp");
var singleWindEl = document.querySelector("#singleWind");
var singleHumidEl = document.querySelector("#singleHumid");
var singleUvEl = document.querySelector("#singleUV");
var selectedCityEl = document.querySelector("#selectedCity");

var formSubmitHandler = function(event){
    event.preventDefault();
    var chosenCity = userInputEl.value.trim();
    console.log(chosenCity);

    if (chosenCity) { 
        currentWeatherInfo(chosenCity);
        citiesContatinerEl.classList.remove(".hide")
        citiesContatinerEl.textContent = "";
        userInputEl.value = "";
    } else {
        alert('Enter a valid US city');
    }
};

var currentWeatherInfo = function(chosenCity) {
    
    var apiUrl = 'https://api.openweathermap.org/data/2.5/weather?q=' + chosenCity + '&appid=81d2cf17616f3ae9a3df3e6346106f1c&units=imperial' 
   
    fetch(apiUrl)
    .then(function(response) {
      return response.json();        
    })
      .then(function(currentWeather) {
          var userLat = currentWeather.coord.lat; 
          var userLon = currentWeather.coord.lon;
          console.log(currentWeather);


    var apiUrl = 'https://api.openweathermap.org/data/2.5/onecall?lat=' + userLat + '&lon=' + userLon + '&exclude={hourly,minutely}&appid=81d2cf17616f3ae9a3df3e6346106f1c';

        fetch(apiUrl) 
        .then(function(response) {
            return response.json();
        }) 
        .then(function(singleDay) {
            console.log(singleDay);
        selectedCityEl.textContent = " " + currentWeather.name
        singleTempEl.textContent = " " + currentWeather.main.temp
        singleWindEl.textContent = " " + currentWeather.wind.speed
        singleHumidEl.textContent = " " + currentWeather.main.humidity + "%"
        //Get UV index
        
        
    // var apiUrl = 'https://api.openweathermap.org/data/2.5/weather?q=' + chosenCity + '&appid=81d2cf17616f3ae9a3df3e6346106f1c&units=imperial&per_page=5' 
    //     fetch(apiUrl)
    //     .then(function(fiveDay) {
    //         console.log(fiveDay)
    //     })


})
    
      })
}

searchFormEl.addEventListener('click', formSubmitHandler);
 