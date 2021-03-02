import firebase from 'firebase/app';
import "@firebase/firestore";


const app = firebase.initializeApp ({
    apiKey: "AIzaSyCdVa-OMvajMoo7VEKQ4tmw9_N_D90KQjo",
    authDomain: "reactcommercecoder.firebaseapp.com",
    projectId: "reactcommercecoder",
    storageBucket: "reactcommercecoder.appspot.com",
    messagingSenderId: "614805245777",
    appId: "1:614805245777:web:98751e539d952d3df14d70",
    measurementId: "G-9KK810GD28"
    });


export const getFirebase = () => {
    return app;
}

export const getFirestore = () => {
    return firebase.firestore(app);
}





