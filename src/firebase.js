import firebase from 'firebase';
// Initialize Firebase
const config = {
    apiKey: "AIzaSyB04KT9sI2oo9qYiqw5iEi_m28Yyw_Equ0",
    authDomain: "reslist-1550356432564.firebaseapp.com",
    databaseURL: "https://reslist-1550356432564.firebaseio.com",
    projectId: "reslist-1550356432564",
    storageBucket: "",
    messagingSenderId: "754507815433"
};

firebase.initializeApp(config);

export default firebase;