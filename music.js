// fetch("https://deezerdevs-deezer.p.rapidapi.com/genre/%7Bid%7D", {
// 	"method": "GET",
// 	"headers": {
// 		"x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com",
// 		"x-rapidapi-key": "e5cac07de5mshe01bb1aa60a3e83p1a6046jsn8fb070397b8f"
// 	}
// })
// .then(response => {
// 	console.log(response);
// })
// .catch(err => {
// 	console.error(err);
// });

document.getElementById("myBtn").addEventListener('click', function() {
  console.log("inside");
    fetch("https://spotfiy-charts.p.rapidapi.com/?type=regional&country=global&recurrence=daily&date=latest", {
        "method": "GET",
        "headers": {
            "x-rapidapi-host": "spotfiy-charts.p.rapidapi.com",
            "x-rapidapi-key": "e5cac07de5mshe01bb1aa60a3e83p1a6046jsn8fb070397b8f"
        }
    })
    

    

    .then(response => response.json())
        .then(data => {
           console.log(data)
        })



        .catch(err => alert("Couldn't find that one, check your spelling or use a main city name"))
    
    
    });


   
  