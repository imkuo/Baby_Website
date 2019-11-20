import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyDddnwuCbB2UfzSkqGqo6iGIYdGbcQ9UtA",
    authDomain: "baby-website-c3ec2.firebaseapp.com",
    databaseURL: "https://baby-website-c3ec2.firebaseio.com",
    projectId: "baby-website-c3ec2",
    storageBucket: "baby-website-c3ec2.appspot.com",
    messagingSenderId: "659172008880",
    appId: "1:659172008880:web:4032762234c25d386e6c75",
    measurementId: "G-WYJ4X60T4Z"
}

const app = firebase.initializeApp(firebaseConfig)

export const db = app.database()
const fireDb = firebase.firestore();
const fireAuth = firebase.auth();
export { fireDb, fireAuth };