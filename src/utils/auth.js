// import * as firebase from 'firebase'
import firebase from "firebase/app";
import "firebase/auth";

export const handleSignUp = async (email, password) => {
  return (await firebase.default
    .auth()
    .createUserWithEmailAndPassword(email, password)
    .catch(function (error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      // [START_EXCLUDE]
      if (errorCode === "auth/weak-password") {
        alert("The password is too weak.");
      } else {
        alert(errorMessage);
      }
      // [END_EXCLUDE]
    })).user;
};

export const handleSignIn = async (email, password)  => {
  if (firebase.auth().currentUser) {
    // [START signout]
    firebase.auth().signOut();
    // [END signout]
  } 
    // Sign in with email and pass.
    // [START authwithemail]
    return await firebase.default
      .auth()
      .signInWithEmailAndPassword(email, password)
      .catch(function (error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // [START_EXCLUDE]
        if (errorCode === "auth/wrong-password") {
          alert("The password is too weak.");
        } else {
          alert(errorMessage);
        }
        // [END_EXCLUDE]
      });
  
};

export const handleGoogleSignIn = async ( ) =>{
  var provider = new firebase.auth.GoogleAuthProvider();
  return await firebase.default.auth().signInWithPopup(provider)
  .catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    // The email of the user's account used.
    var email = error.email;
    // The firebase.auth.AuthCredential type that was used.
    var credential = error.credential;
    // ...
  });
}
