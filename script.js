window.addEventListener("load", function(){

	var api_request = new XMLHttpRequest(); 

	api_request.addEventListener("load", function(e){
		var api_response = JSON.parse(e.target.responseText);
		var current_summary = document.getElementById("current_summary");
		var current_temp = document.getElementById("current_temp");
		var hourly_temp = document.getElementsByClassName("hourly_temp");
		var daily_high = document.getElementsByClassName("daily_high");
		var daily_low = document.getElementsByClassName("daily_low");
		var todays_summary = document.getElementsByClassName("today-summary");

		current_summary.innerHTML = api_response.currently.summary
		current_temp.innerHTML = api_response.currently.temperature + "&deg;";

		for(i=0; i<hourly_temp.length; i++){
			hourly_temp[i].innerHTML = api_response.hourly.data[i].temperature + "&deg;";
		}

		for(i=0; i<daily_high.length; i++){
			daily_high[i].innerHTML = api_response.daily.data[i].temperatureMax + "&deg;";
			daily_low[i].innerHTML = api_response.daily.data[i].temperatureMin + "&deg;";
		}

		todays_summary[0].innerHTML = "Today: " + api_response.hourly.summary;

	});


	api_request.open("get", "api");
	api_request.send();

});