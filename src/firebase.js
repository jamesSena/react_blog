import firebaseApp, { app } from 'firebase/app';
import 'firebase/database';
import 'firebase/auth';

let firebaseConfig = {
    apiKey: "AIzaSyAEpchbR257dc_1dWl5FRa8VHw5lYoB_ds",
    authDomain: "reactjs-firebase-james.firebaseapp.com",
    databaseURL: "https://reactjs-firebase-james.firebaseio.com",
    projectId: "reactjs-firebase-james",
    storageBucket: "reactjs-firebase-james.appspot.com",
    messagingSenderId: "759601773099",
    appId: "1:759601773099:web:018d3d42cf55599df8886e",
    measurementId: "G-X8M2X8BL0R"
  };


class Firebase{
    constructor(){
        firebaseApp.initializeApp(firebaseConfig);
        this.app = firebaseApp.database();
    }

    login(email, password){
        return firebaseApp.auth().signInWithEmailAndPassword(email, password);
    }

    async register(nome, email, password){
        await firebaseApp.auth().createUserWithEmailAndPassword(email, password);
        
        const uid = firebaseApp.auth().currentUser.uid;
    
        return firebaseApp.database().ref('usuarios').child(uid).set({
            nome:nome
        });
    }

    isInitialized(){
        return new Promise(resolve => {
            firebaseApp.auth().onAuthStateChanged(resolve);
        });
    }
}

export default new Firebase