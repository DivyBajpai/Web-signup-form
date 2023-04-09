// setting up firebase with our website
const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyCJbB6uPowQ0Rcn4yEMjoVCn-X7G0dpbmg",
    authDomain: "look-18337.firebaseapp.com",
    databaseURL: "https://look-18337-default-rtdb.firebaseio.com",
    projectId: "look-18337",
    storageBucket: "look-18337.appspot.com",
    messagingSenderId: "24585963211",
    appId: "1:24585963211:web:f3078523d59712cad67d4e",
    measurementId: "G-0JMS6MFD4Y"
});
const db = firebaseApp.firestore();
const auth = firebaseApp.auth();

// Sign up function
const signUp = () => {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    console.log(email, password)
    // firebase code
    firebase.auth().createUserWithEmailAndPassword(email, password)
        .then((result) => {
            // Signed in 
            document.write("You are Signed Up")
            console.log(result)
            // ...
        })
        .catch((error) => {
            console.log(error.code);
            console.log(error.message)
            // ..
        });
}

// Sign In function
const signIn = () => {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    // firebase code
    firebase.auth().signInWithEmailAndPassword(email, password)
        .then((result) => {
            // Signed in 
            document.write("You are Signed In")
            console.log(result)
        })
        .catch((error) => {
            console.log(error.code);
            console.log(error.message)
        });
}