import app from 'firebase/app';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyDQ9Og9BTPLGqN052HNJUXrGskbyySy4ZQ",
    authDomain: "learn-react-74646.firebaseapp.com",
    databaseURL: "https://learn-react-74646.firebaseio.com",
    projectId: "learn-react-74646",
    storageBucket: "",
    messagingSenderId: "587877558261",
    appId: "1:587877558261:web:26c5b9a19786b9b48ae2bc",
    measurementId: "G-PL2E2YVCBV"
};

class Firebase {
    constructor() {
        app.initializeApp(config);
        this.auth = app.auth();
    }

    doCreateUserWithEmailAndPassword = (email, password) =>
        this.auth.createUserWithEmailAndPassword(email, password);

    doSignInWithEmailAndPassword = (email, password) =>
        this.auth.signInWithEmailAndPassword(email, password);

    doSignOut = () => this.auth.signOut();
}

export default Firebase;
