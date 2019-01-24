openWeatherJS = function (apiKey) {
    // Request the current weather information, either by city name or by ZIP code
    this.requestCurrentWeather = function (jsonCityInfo, successCallback) {
        //define callback function up here, which parses the response into a nice JSON
        var internalCallback = function (response) {
            var JSONresponse = JSON.parse(response);
            //now feed it back to the callback
            successCallback(JSONresponse);
        }
        //are we requesting with a ZIP code?
        if (jsonCityInfo.zip != undefined) {
            // Request with ZIP Code
            var url = "https://api.openweathermap.org/data/2.5/weather?zip=" + jsonCityInfo.zip + "&appid=" + apiKey;

            var httpRequest = new XMLHttpRequest();
            httpRequest.onreadystatechange = () => {
                if (httpRequest.readyState == 4 && httpRequest.status == 200)
                    internalCallback(httpRequest.responseText);
            }
            httpRequest.open("GET", url, true); // true for asynchronous 
            httpRequest.send();
        } else if (jsonCityInfo.q != undefined) {
            //Request with city name and country code, divided by comma
            var url = "https://api.openweathermap.org/data/2.5/weather?q=" + jsonCityInfo.q + "&appid=" + apiKey;
            
            var httpRequest = new XMLHttpRequest();
            httpRequest.onreadystatechange = () => {
                if (httpRequest.readyState == 4 && httpRequest.status == 200)
                    internalCallback(httpRequest.responseText);
            }
            httpRequest.open("GET", url, true); // true for asynchronous 
            httpRequest.send();
        }
    };
    
    this.requestForecast5 = function (jsonCityInfo, successCallback) {
        //define callback function up here, which parses the response into a nice JSON
        var internalCallback = function (response) {
            var JSONresponse = JSON.parse(response);
            //now feed it back to the callback
            successCallback(JSONresponse);
        }
        //are we requesting with a ZIP code?
        if (jsonCityInfo.zip != undefined) {
            // Request with ZIP Code
            var url = "https://api.openweathermap.org/data/2.5/forecast?zip=" + jsonCityInfo.zip + "&appid=" + apiKey;

            var httpRequest = new XMLHttpRequest();
            httpRequest.onreadystatechange = () => {
                if (httpRequest.readyState == 4 && httpRequest.status == 200)
                    internalCallback(httpRequest.responseText);
            }
            httpRequest.open("GET", url, true); // true for asynchronous 
            httpRequest.send();
        } else if (jsonCityInfo.q != undefined) {
            //Request with city name and country code, divided by comma
            var url = "https://api.openweathermap.org/data/2.5/forecast?q=" + jsonCityInfo.q + "&appid=" + apiKey;
            
            var httpRequest = new XMLHttpRequest();
            httpRequest.onreadystatechange = () => {
                if (httpRequest.readyState == 4 && httpRequest.status == 200)
                    internalCallback(httpRequest.responseText);
            }
            httpRequest.open("GET", url, true); // true for asynchronous 
            httpRequest.send();
        }
    }
}
