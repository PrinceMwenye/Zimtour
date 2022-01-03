// Get current weather information
var button = document.querySelector('.button');
var inputValue = document.querySelector('.inputValue');
var name = document.querySelector('.name');
var desc = document.querySelector('.desc');
var temp = document.querySelector('.temp');
var extra = document.querySelector(".extra-information")
    // var weatherpicture = document.querySelector(".weatherpicture")
let units = "metric"


button.addEventListener('click', function() {


    // Get current weather data from API and populate on weather html

    fetch("https://api.openweathermap.org/data/2.5/weather?q=" + inputValue.value + "&appid=f81e869ce68e56cb2fe9ed64be0a74b1&units=" + units)

    .then(response => response.json())
        .then(data => {
            var nameValue = data['name'];
            var tempValue = data['main']['temp'];
            var descValue = data['weather'][0]['description'];

            cityname.innerHTML = nameValue;
            tempgoeshere.innerHTML = tempValue + "&deg";
console.log(tempValue);

            desc.innerHTML = "<b>" + descValue; + "</b>"

            temp.innerHTML = "<b>Current Temp: <b/>" + tempValue + " °C";

            if (tempValue < 10) {
                extra.innerHTML = "Seems too cold 🥶 in " + nameValue + ". Stay warm"
                extra.style.color = "blue"
                weatherpicture.innerHTML = "<img src = '/images/coldweather.jpg'/>"
                    // cold weather

            } else if (tempValue > 10 && tempValue < 30) {
                extra.innerHTML = "Could be warm enough in " + nameValue + ", just drink enough water!"
                extra.style.color = "orange"

                weatherpicture.innerHTML = "<img src = '/images/hotweather.jpg'/>"

                // hot weather
            } else {
                extra.innerHTML = "Too hot for the outdoors!"
                weatherpicture.innerHTML = "<img src = '/images/hotweatherwarning.jpeg'/>"


            }

        })



    // .catch(err => alert("Couldn't find that one, check your spelling or use a main city name"))


});



button.addEventListener('click', function(){
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = today.getFullYear();

today = mm + '/' + dd + '/' + yyyy;
document.getElementById("date-goes-here").innerHTML = today;

});

