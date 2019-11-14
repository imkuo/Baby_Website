import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyCyRWT4t_yIJRQr755UEJYdVZ-EYlERdnc",
    authDomain: "baby-website-f90eb.firebaseapp.com",
    databaseURL: "https://baby-website-f90eb.firebaseio.com",
    projectId: "baby-website-f90eb",
    storageBucket: "baby-website-f90eb.appspot.com",
    messagingSenderId: "99005700891",
    appId: "1:99005700891:web:1b1ab567b1a0be7c69d1be"
}

firebase.initializeApp(firebaseConfig)

const db = firebase.firestore()
const fireAuth = firebase.auth()
export {db, fireAuth}
