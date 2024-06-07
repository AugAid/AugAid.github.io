// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getFirestore, collection, addDoc, serverTimestamp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDxc_nvMeVepgghkOD6HOD84WAGT1MKQeY",
    authDomain: "augaid-1001.firebaseapp.com",
    projectId: "augaid-1001",
    storageBucket: "augaid-1001.appspot.com",
    messagingSenderId: "917546084718",
    appId: "1:917546084718:web:11e3c9f62d1d17676c797f",
    measurementId: "G-TJ6M0TV89M"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

document.getElementById('subscribeForm').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent the default form submission

    const email = event.target.email.value;
    const name = event.target.name.value;

    // Call a JavaScript function to handle the form data
    subscribeUser(email, name);
});

async function subscribeUser(email, name) {
    try {
        await addDoc(collection(db, 'newsletterSubscribers'), {
            email: email,
            name: name,
            timestamp: serverTimestamp()
        });
        console.log('User subscribed successfully');
        alert('Thank you for subscribing!');
    } catch (error) {
        console.error('Error subscribing user: ', error);
    }
}
