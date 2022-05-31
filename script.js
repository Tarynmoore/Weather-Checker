var userInputEl = document.querySelector("#userInput");
var searchFormEl = document.querySelector("#btn");
var singleForecastEl = document.querySelector("#singleDayContainer");
var singleTempEl = document.querySelector("#singleTemp");
var singleWindEl = document.querySelector("#singleWind");
var singleHumidEl = document.querySelector("#singleHumid");
var singleUvEl = document.querySelector("#singleUV");
var selectedCityEl = document.querySelector("#selectedCity");
var date = new Date();

var weatherInformation = function(event){
    event.preventDefault();
    var chosenCity = userInputEl.value.trim();
    console.log(chosenCity);

    if (chosenCity) { 
        currentWeather(chosenCity); 
    } else {
        alert('Enter a valid US city');
    }
};

var currentWeather = function(chosenCity) {
   
    var apiUrlCity = 'https://api.openweathermap.org/data/2.5/weather?q=' + chosenCity + '&appid=81d2cf17616f3ae9a3df3e6346106f1c&units=imperial' 
   
    fetch(apiUrlCity)
    .then(function(response) {
      return response.json();        
    })
      .then(function(currentWeather) {
          var userLat = currentWeather.coord.lat; 
          var userLon = currentWeather.coord.lon;
          console.log(currentWeather);


    var apiUrl = 'https://api.openweathermap.org/data/2.5/onecall?lat=' + userLat + '&lon=' + userLon + '&exclude={hourly,minutely}&appid=81d2cf17616f3ae9a3df3e6346106f1c&units=imperial';
    var currentDate = (date.getMonth() + 1) + '/' + date.getDate() + '/' + date.getFullYear(); 
        fetch(apiUrl) 
        .then(function(response) {
            return response.json();
        }) 
        //Displays single day weather
        .then(function(displayWeather) {
            console.log(displayWeather);
        
        selectedCityEl.textContent = " " + currentWeather.name + " " + currentDate
        singleTempEl.textContent = " " + currentWeather.main.temp + "°F"
        singleWindEl.textContent = " " + currentWeather.wind.speed + "mph"
        singleHumidEl.textContent = " " + currentWeather.main.humidity + "%"

        //Adds the background color to the uv depending on what the index is 
        var fiveDayForecast = displayWeather.daily;
        console.log(fiveDayForecast);
        singleUvEl.textContent = " " + fiveDayForecast[0].uvi
        if (fiveDayForecast[0].uvi >= 0) {
            singleUvEl.className = "uv-green"
        }
        if (fiveDayForecast[0].uvi >= 3) {
            singleUvEl.className = "uv-yellow"
        }
        if (fiveDayForecast[0].uvi >= 8) {
            singleUvEl.className = "uv-red"
        }
        
        
        // Gets the five day forecast and displays it 
        // Uses the API to get the information for the forecast    
        var temp1El = document.querySelector("#temp1");
        var wind1El = document.querySelector('#wind1');
        var humid1El = document.querySelector("#humid1");
        var date1El = document.querySelector("#date1");
        date1El.textContent = (date.getMonth() + 1) + '/' + (date.getDate() + 1) + '/' + date.getFullYear(); 
        temp1El.textContent = "Temperature: " + fiveDayForecast[1].temp.day 
        wind1El.textContent = "Wind: " + fiveDayForecast[1].wind_speed + " mph"
        humid1El.textContent = "Humidity: " + fiveDayForecast[1].humidity + " %"

        var temp2El = document.querySelector("#temp2");
        var wind2El = document.querySelector("#wind2");
        var humid2El = document.querySelector("#humid2");
        var date2El = document.querySelector("#date2");
        date2El.textContent = (date.getMonth() + 1) + '/' + (date.getDate() + 2) + '/' + date.getFullYear(); 
        temp2El.textContent = "Temperature: " + fiveDayForecast[2].temp.day + "°F"
        wind2El.textContent = "Wind: " + fiveDayForecast[2].wind_speed + " mph"
        humid2El.textContent = "Humidity: " + fiveDayForecast[2].humidity + " %"

        var temp3El = document.querySelector("#temp3");
        var wind3El = document.querySelector("#wind3");
        var humid3El = document.querySelector("#humid3");
        var date3El = document.querySelector("#date3");
        date3El.textContent = (date.getMonth() + 1) + '/' + (date.getDate() + 3) + '/' + date.getFullYear(); 
        temp3El.textContent = "Temperature: " + fiveDayForecast[3].temp.day + "°F"
        wind3El.textContent = "Wind: " + fiveDayForecast[3].wind_speed + " mph"
        humid3El.textContent = "Humidity: " + fiveDayForecast[3].humidity + " %"

        var temp4El = document.querySelector("#temp4");
        var wind4El = document.querySelector("#wind4");
        var humid4El = document.querySelector("#humid4");
        var date4El = document.querySelector("#date4");
        date4El.textContent = (date.getMonth() + 1) + '/' + (date.getDate() + 4) + '/' + date.getFullYear(); 
        temp4El.textContent = "Temperature: " + fiveDayForecast[4].temp.day + "°F"
        wind4El.textContent = "Wind: " + fiveDayForecast[4].wind_speed + " mph"
        humid4El.textContent = "Humidity: " + fiveDayForecast[4].humidity + " %"

        var temp5El = document.querySelector("#temp5");
        var wind5El = document.querySelector("#wind5");
        var humid5El = document.querySelector("#humid5");
        var date5El = document.querySelector("#date5");
        date5El.textContent = (date.getMonth() + 1) + '/' + (date.getDate() + 5) + '/' + date.getFullYear(); 
        temp5El.textContent = "Temperature: " + fiveDayForecast[5].temp.day + "°F"
        wind5El.textContent = "Wind: " + fiveDayForecast[5].wind_speed + " mph"
        humid5El.textContent = "Humidity: " + fiveDayForecast[5].humidity + " %"

        })
    });  
}

searchFormEl.addEventListener('click', weatherInformation);
 