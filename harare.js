function writeTopHotels() {
    //define a variable for the collection you want to create in Firestore to populate data
    var hotelRef = db.collection("topHotels");

    hotelRef.add({
        name: "Rainbow Hotel",
        code:"rainbow01",
        priceMin: "250",    
        city: "Harare",
        province: "Harare",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTebQIYcnFjT9eoM7_Zd3XuU8M1b-aAu6YTsQ&usqp=CAU",
        rating: "⭐⭐⭐⭐🌟"
    });
    hotelRef.add({
        name: "Meikles Hotel",
        code:"Meikles01",
        priceMin: "158",    
        city: "Harare",
        province: "Harare",
        image: "https://res.cloudinary.com/resortsandlodges/image/fetch/w_800,h_520,c_fill/https://media.travelnetsolutions.com/25f5832d4bed76a3b48dcb64b24a6988/original.jpg",
        rating: "⭐⭐⭐🌟"
    });
    hotelRef.add({
        name: "Margolis Resort",
        code:"margo01",
        priceMin: "200",    
        city: "Harare",
        province: "Harare",
        image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0b/fb/20/bb/cresta-lodge-harare-exterior.jpg?w=900&h=-1&s=1",
        rating: "⭐⭐"
    });
}

function writeMediumHotels() {
    //define a variable for the collection you want to create in Firestore to populate data
    var hotelRef = db.collection("mediumHotels");

    hotelRef.add({
        name: "New Ambasador",
        code:"nam12",
        priceMin: "100",    
        city: "Harare",
        province: "Harare",
        image: "https://gatewaystream.com/assets/uploads/hotel_images/1561535228__DSC4307.jpg",
        rating: "⭐⭐⭐"
    });
    hotelRef.add({
        name: "Bronte",
        code:"bron08",
        priceMin: "80",    
        city: "Harare",
        province: "Harare",
        image: "https://exp.cdn-hotels.com/hotels/9000000/8720000/8711800/8711749/7b9cfb5a_z.jpg?impolicy=fcrop&w=500&h=333&q=medium",
        rating: "⭐⭐🌟"
    });
    hotelRef.add({
        name: "Cresta",
        code:"cha001",
        priceMin: "75",   
        city: "Harare",
        province: "Harare",
        image: "https://api.crestahotels.com/uploads/medium/file/438/small_focal_Zimbabwe_Oasis_pool.jpg",
        rating: "⭐⭐⭐"
    });
}


// writeMediumHotels();
// writeTopHotels();







document.getElementById('high').addEventListener("click", function() {
    // remove current h5 text
    headers = document.getElementsByTagName("h5");
   for (i = 0; i <  headers.length; i++) {

headers[i].innerHTML = "";
   }

   images = document.getElementsByTagName("img");

for (i = 0; i <  images.length; i++) {

images[i].src = "";
   }


    
    displayTopHotels();
   
 
});



document.getElementById('medium').addEventListener("click", function() {

// remove current h5 text
    headers = document.getElementsByTagName("h5");
   for (i = 0; i <  headers.length; i++) {

headers[i].innerHTML = "";
   }
   images = document.getElementsByTagName("img");

   for (i = 0; i <  images.length; i++) {
   
   images[i].src = "";
      }

   displayMediumHotels();

 
});






function displayTopHotels() {
    db.collection("topHotels").get()
        .then(allHotels => {

            var num = 0;
            allHotels.forEach(doc => {

                var hotelName = doc.data().name; //gets the name field
                var hotelID = doc.data().code; //gets the unique ID field
                var hotelPrice = doc.data().priceMin;
                var hotelimage = doc.data().image;
                var hotelname = document.createElement('h5');
                hotelname.setAttribute("id", hotelID);
                hotelname.setAttribute("class" , "card-title");

                document.getElementsByClassName("card-body")[num].appendChild(hotelname);
                document.getElementById(hotelID).innerText = hotelName;
                document.getElementsByClassName("minPrice")[num].innerText = "From: " + "$"+hotelPrice;
                document.getElementsByClassName("hotelimage")[num].src = hotelimage;

                



                num ++;

        })
    })
}


function displayMediumHotels() {
    db.collection("mediumHotels").get()
        .then(allHotels => {

            var num = 0;
            allHotels.forEach(doc => {

                var hotelName = doc.data().name; //gets the name field
                var hotelID = doc.data().code; //gets the unique ID field
                var hotelPrice = doc.data().priceMin;
                var hotelimage = doc.data().image;

                var hotelname = document.createElement('h5');
                hotelname.setAttribute("id", hotelID);
                hotelname.setAttribute("class" , "card-title");
                
                document.getElementsByClassName("card-body")[num].appendChild(hotelname);
                document.getElementById(hotelID).innerText = hotelName;
                document.getElementsByClassName("minPrice")[num].innerText = "From: " + "$"+hotelPrice;
                document.getElementsByClassName("hotelimage")[num].src = hotelimage;

                num ++;

        })
    })
}
