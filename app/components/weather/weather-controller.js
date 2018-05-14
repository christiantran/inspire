function WeatherController(){
	var wc = this;
	var weatherService = new WeatherService();

function drawWeather(weather){
	var fahrenheit = Math.floor((9/5) * (weather.main.temp - 273) + 32);
	var template = ""
	template +=`
	<h1>${fahrenheit}º</h1>
	<h3>${weather.name}</h3>
	`
	document.getElementById('weather').innerHTML = template
}

weatherService.getWeather(drawWeather)

	weatherService.getWeather(function(weather){
		console.log(weather);
		//What can you do with this weather object?
	})

}