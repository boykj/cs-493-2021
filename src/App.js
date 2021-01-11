//import React, { useState } from "react";
import logo from './logo.svg';
import './App.css';
import firebase from "firebase/app";
import "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyAHRrFJcgJAIuCWea01pSZhurnGtA6Ps6M",
  authDomain: "cs493-2021-e2fac.firebaseapp.com",
  projectId: "cs493-2021-e2fac",
  storageBucket: "cs493-2021-e2fac.appspot.com",
  messagingSenderId: "1007924530957",
  appId: "1:1007924530957:web:7e2012cffac31a476faa44"
};

// Try to only load the DB when you need it

firebase.initializeApp(firebaseConfig);


function App() {
  console.log(firebase);
  return (
    <div className="App">
      <header className="App-header">
        <button onClick={async function() {
          const user = await firebase
            .auth()
            .createUserWithEmailAndPassword("testing@test.com", "Test1234"); 
        alert(JSON.stringify(user))}}>Sign Up</button>
      </header>
    </div>
  );
}

export default App;
