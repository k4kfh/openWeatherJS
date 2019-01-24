# openWeatherJS
A barebones wrapper for using the free OpenWeatherMap API with JavaScript.

I was forced to create this project in response to Yahoo's modifications to their weather API, which subsequently broke the excellent simpleWeather.js plugin. Since it is pretty likely that simpleWeather.js will never be repaired, and my CasparCG weekly forecast template needs fixing, I decided to create a barebones wrapper for OpenWeatherMap's free API.

Example code:

```javascript
// Create a new instance of the API with your API key
var weatherAPI = new openWeatherJS("your free api key from openweathermap");

// Request current weather using a ZIP code and print JSON response to the console
weatherAPI.requestCurrentWeather({"zip":33333}, function(response){console.dir(response)});

// Request current weather using a city name (in format city,country) and print a JSON response to the console
weatherAPI.requestCurrentWeather({"q":"huntsville,us"}, function(response){console.dir(response)});

// Request 5 day forecast using a ZIP code and print JSON response to the console
weatherAPI.requestForecast5({"zip":33333}, function(response){console.dir(response)});

// Request 5 day forecast using a city name (in format city,country) and print a JSON response to the console
weatherAPI.requestForecast5({"q":"huntsville,us"}, function(response){console.dir(response)});
```

For information on the response you'll get, please see [OpenWeatherMap's API documentation here.](https://openweathermap.org/api)
