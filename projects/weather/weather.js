$(document).ready(function() {
	function convertToF(celsius) {
    	// convert celsius to fahrenheit
    	var fahrenheit = (9/5) * celsius + 32;
    	return fahrenheit.toFixed(2);
	}


	// $("#getloc").on("click", function(){
	// 	if ("geolocation" in navigator) {
	//   	/* geolocation is available */
	// 	navigator.geolocation.getCurrentPosition(function(position) {
	// 	  console.log(position.coords.latitude);
	// 	});
	// } else {
	//   	/* geolocation IS NOT available */
	//   	console.log("not available");
	// }
	// });

	

	// Acquire location
	if ("geolocation" in navigator) {
		navigator.geolocation.getCurrentPosition(function(position) {
			console.log(position.coords.latitude, position.coords.longitude);
			var api = "https://fcc-weather-api.glitch.me/api/current?lat=" +position.coords.latitude+"&lon=" + position.coords.longitude;
			$.getJSON(api, function(data){
				// console.log(JSON.stringify(data));
				console.log(data);

				var keys = Object.keys(data); // get the keys of the object data
				keys.forEach(function(key){
					var val = data[key];
					console.log(key, val);
				});

				var city = data["name"];
				var country = data["sys"].country;

				celsius = data["main"].temp;
				fahrenheit = convertToF(celsius);

				$("#location").html(city + ", " + country);
				$("#temp").html(fahrenheit + " &deg;F");
				
				var imgSrc = data.weather[0].icon;
				

				if (imgSrc != null) { // TODO! need to iterate through weather array and find image based on main!
					$("#weather-img").html('<img class="center-block" src=' + imgSrc + '>');	
				}
				
			});

			function displayCelsius() {
				$("#temp").html(celsius + " &deg;C");
			}

			function displayFahrenheit() {
				$("#temp").html(fahrenheit + " &deg;F");
			}


			$("#fahr").on("click", function(){
				displayFahrenheit();
			});

			$("#cels").on("click", function(){
				displayCelsius();
			});

			function doc_keyUp(e) {
			    // this would test for whichever key is 40 and the ctrl key at the same time
			    if (e.keyCode == 67) {
			        // call your function to do the thing
			        displayCelsius();
			    } else if (e.keyCode == 70) {
			    	displayFahrenheit();
			    }
			}
			// register the handler 
			document.addEventListener('keyup', doc_keyUp, false);

		});
		// GET call to API
	} else {
		$("#temp").html("Location information is needed to query weather");

	}

});