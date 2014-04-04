$(function(){
	var state = "IL";
	var city = "Evanston";
	$.ajax({
		url:"http://api.wunderground.com/api/5bb4e5428ca66275/geolookup/conditions/q/"
		+state+"/"+city+".json",
		dataType:"jsonp",
		success: function(parsed_json) {
			var location = parsed_json['location']['city'];
			var temp_f = parsed_json['current_observation']['temp_f'];
			$("#weather-text span").append(temp_f);
		},
		error: function() {
			$("#weather-text span").append("Could not find temperature.");
		}

	});
});