const firebaseConfig = {
    apiKey: "AIzaSyBK5M3kg4PyAOfrDAqeCdJ7y2vDO78fdlk",
    authDomain: "zimtour-142ad.firebaseapp.com",
    projectId: "zimtour-142ad",
    storageBucket: "zimtour-142ad.appspot.com",
    messagingSenderId: "565819115055",
    appId: "1:565819115055:web:6e921552256ce5dc2428da",
    measurementId: "G-MW2MFZ77WS"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();


// const analytics = getAnalytics(app);