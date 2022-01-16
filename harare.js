function writeTopHotels() {
    //define a variable for the collection you want to create in Firestore to populate data
    var hotelRef = db.collection("topHotels");

    hotelRef.add({
        name: "Rainbow Hotel",
        code:"rainbow01",
        priceMin: "250",    
        city: "Harare",
        province: "Harare",
        image: "",
    });
    hotelRef.add({
        name: "Meikles Hotel",
        code:"Meikles01",
        priceMin: "158",    
        city: "Harare",
        province: "Harare",
        image: ""
    });
    hotelRef.add({
        name: "Margolis Resort",
        code:"margo01",
        priceMin: "200",    
        city: "Harare",
        province: "Harare",
        image: ""
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
        image: "",
    });
    hotelRef.add({
        name: "Bronte",
        code:"bron08",
        priceMin: "80",    
        city: "Harare",
        province: "Harare",
        image: ""
    });
    hotelRef.add({
        name: "Chalets",
        code:"cha001",
        priceMin: "75",   
        city: "Harare",
        province: "Harare",
        image: ""
    });
}


// writeMediumHotels();
// writeTopHotels();







document.getElementById('high').addEventListener("click", function() {
    
    displayTopHotels();
   
 
});


function createHotelNameAttributes() {

}




function displayTopHotels() {
    db.collection("topHotels").get()
        .then(allHotels => {

            var num = 0;
            allHotels.forEach(doc => {

                var hotelName = doc.data().name; //gets the name field
                var hotelID = doc.data().code; //gets the unique ID field
                var hotelname = document.createElement('h5');
                hotelname.setAttribute("id", hotelID);
                hotelname.setAttribute("class" , "card-title");
                
                document.getElementsByClassName("card-body")[num].appendChild(hotelname);
                document.getElementById(hotelID).innerText = hotelName;
                num ++;

        })
    })
}


// function displayMediumHotels() {
// db.collection("mediumHotels").get()
//     .then(allHotels => {
//         allHotels.forEach(doc => {
//             var hotelName = doc.data().name; //gets the name field
//             var hotelID = doc.data().code; //gets the unique ID field
//             // var id = document.createElement
//             // console.log(hotelID);
//             document.getElementById(hotelID).innerText = hotelName;
//         })
//     })
// }
