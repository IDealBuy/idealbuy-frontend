import firebase from "firebase/app";
import "firebase/auth";

export const handleSignUp = async (email, password) => {
  return (
    await firebase.default
      .auth()
      .createUserWithEmailAndPassword(email, password)
  ).user;
};

export const handleSignIn = async (email, password) => {
  if (firebase.auth().currentUser) {
    firebase.auth().signOut();
  }
  return await firebase.default
    .auth()
    .signInWithEmailAndPassword(email, password);
};

export const handleGoogleSignIn = async () => {
  var provider = new firebase.auth.GoogleAuthProvider();
  return await firebase.default.auth().signInWithPopup(provider);
};

export const logout = async () => {
  await firebase.auth().signOut()
  console.log("Sign-out successful")
  localStorage.removeItem("userData")
}