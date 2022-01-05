function insertName() {
    firebase.auth().onAuthStateChanged(user => {
        // Check if user is signed in:
        if (user) {
            // Do something for the current logged-in user here: 
            console.log(user.uid);
            //go to the correct user document by referencing to the user uid
            currentUser = db.collection("users").doc(user.uid);
            //get the document for current user.
            currentUser.get()
                .then(userDoc => {
                    var user_Name = userDoc.data().name;
                    var today = new Date();
                    var time = today.getHours();

                    if (time >= 6 && time < 12) {
                        document.getElementById("profile").innerHTML = "Good Morning " + user_Name; //using javascript
                    } else if (time >= 12 && time < 17) {
                        document.getElementById("profile").innerHTML = "Good Afternoon " + user_Name;
                    } else if (time >= 17 && time < 23) {
                        document.getElementById("profile").innerHTML = "Good Evening " + user_Name;

                    } else {
                        document.getElementById("profile").innerHTML = "Hi " + user_Name;
                    }
                })
        } else {
            // No user is signed in.
        }
    });
}
insertName();


// Change background based on time

// function setbackgroundImg() {
//     var today = new Date();
//     var time = today.getHours();
//     // console.log(time)
//     if (time > 6 && time < 18) {
//         document.body.style.backgroundImage = "url('images/mazoedam.jpg')";
//     } else if (time >= 18 && time <= 6) {
//         document.body.style.backgroundImage = "url('images/Masvingosunrise.jpg')";
//     }
// }

// setbackgroundImg();