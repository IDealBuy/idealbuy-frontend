import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

export const handleSignUp = async (email, password) => {
  let userCreated = (
    await firebase.default
      .auth()
      .createUserWithEmailAndPassword(email, password)
  ).user;
  const db = firebase.firestore();
  let userData = {
    uid: userCreated.uid,
    email: userCreated.email,
    role: "client",
  };
  await db.collection("users").doc(userCreated.uid).set(userData);
  return userData;
};

export const handleSignIn = async (email, password) => {
  if (firebase.auth().currentUser) {
    firebase.auth().signOut();
  }
  let user = (
    await firebase.default.auth().signInWithEmailAndPassword(email, password)
  ).user;
  const db = firebase.firestore();
  let docRef = await db.collection("users").doc(user.uid).get();
  console.log(docRef.data())
  return docRef.data();
};

export const handleGoogleSignIn = async () => {
  var provider = new firebase.auth.GoogleAuthProvider();
  let userCreated = (await firebase.default.auth().signInWithPopup(provider)).user;
  console.log(userCreated)
  const db = firebase.firestore();
  let docRef = await db.collection("users").doc(userCreated.uid).get();
  if(docRef.exists){
    return docRef.data();
  }else{
    let userData = {
      uid: userCreated.uid,
      email: userCreated.email,
      role: "client",
    };
    await db.collection("users").doc(userCreated.uid).set(userData)
    return userData;
  }
};

export const logout = async () => {
  await firebase.auth().signOut();
  console.log("Sign-out successful");
  localStorage.removeItem("userData");
  localStorage.removeItem("cart");
};
