var request = require('request');

request('https://samples.openweathermap.org/data/2.5/weather?zip=94040,us&appid=439d4b804bc8187953eb36d2a8c26a02', function(error, response, body){
	if(!error && response.statusCode == 200){
		var parseData = JSON.parse(body);
		console.log(parseData["sys"]["sunset"]);
	}
});