window.addEventListener("load", function(){

	var api_request = new XMLHttpRequest(); 

	api_request.addEventListener("load", function(e){
		var api_response = JSON.parse(e.target.responseText);
		

		var current_summary = document.getElementById("current_summary");
		var current_temp = document.getElementsByClassName("current_temp");
		var todays_high = document.getElementsByClassName("todays_high");
		var todays_low = document.getElementsByClassName("todays_low");
		
		var hourly_temp = document.getElementsByClassName("hourly_temp");
		
		var daily_high = document.getElementsByClassName("daily_high");
		var daily_low = document.getElementsByClassName("daily_low");
		
		var todays_summary = document.getElementsByClassName("today-summary");
		


		var sunrise = document.getElementById("sunrise");
		var sunset = document.getElementById("sunset");
		
		var chanceRain = document.getElementById("chanceRain");
		var humidity = document.getElementById("humidity");
		
		var wind = document.getElementById("wind");
		var realFeel = document.getElementById("realFeel");

		var precipitation = document.getElementById("precipitation");
		var pressure = document.getElementById("pressure");
		var visibility = document.getElementById("visibility");



		current_summary.innerHTML = api_response.currently.summary
		current_temp[0].innerHTML = Math.round(api_response.currently.temperature) + "&deg;";
		current_temp[1].innerHTML = Math.round(api_response.currently.temperature) + "&deg;";
		todays_high[0].innerHTML = Math.round(api_response.daily.data[0].temperatureMax) + "&deg;";
		todays_low[0].innerHTML = Math.round(api_response.daily.data[0].temperatureMin) + "&deg;";
		

		for(i=0; i<hourly_temp.length; i++){
			hourly_temp[i].innerHTML = Math.round(api_response.hourly.data[i+7].temperature) + "&deg;";
		}

		for(i=0; i<daily_high.length; i++){
			daily_high[i].innerHTML = Math.round(api_response.daily.data[i].temperatureMax) + "&deg;";
			daily_low[i].innerHTML = Math.round(api_response.daily.data[i].temperatureMin) + "&deg;";
		}

		todays_summary[0].innerHTML = "Today: " + api_response.hourly.summary;

		var times = [api_response.daily.data[0].sunriseTime, api_response.daily.data[0].sunsetTime];

		
		for(i=0; i<times.length; i++){
			var t = new Date(times[i] * 1000);
			var hour = t.getHours();
			var min = t.getMinutes();
				if(min < 10){
					min = "0" + min;
				}
				if(hour > 12){
					hour -= 12;
				}
			times[i] = hour + ":" + min;
		}

		

		


		sunrise.innerHTML = times[0] + " AM";
		sunset.innerHTML = times[1] + " PM";
		chanceRain.innerHTML = api_response.daily.data[0].precipProbability + "%";
		humidity.innerHTML = api_response.daily.data[0].humidity*100 + "%";
		
		function degToCompass(num) {
		    var val = Math.floor((num / 45) + 0.5);
		    var arr = ["N", "NE", "E", "SE", "S", "SW", "W", "NW"];
		    return arr[(val % 8)];
		}

		var wind_direction = degToCompass(api_response.daily.data[0].windBearing);

		wind.innerHTML = Math.round(api_response.daily.data[0].windSpeed) + " mph " + wind_direction;
		


		realFeel.innerHTML = Math.round(api_response.currently.apparentTemperature) + "&deg;";
		precipitation.innerHTML = api_response.daily.data[0].precipIntensity + " in";
		pressure.innerHTML = Math.round((29.92 * api_response.daily.data[0].pressure) / 1013.25) + " in";
		visibility.innerHTML = api_response.daily.data[0].visibility + " mi";

	});


	api_request.open("get", "api");
	api_request.send();

});