import firebase from "firebase/app";
import "firebase/firestore";

export const getAllUsers = async () => {
  const db = firebase.firestore();
  const docs = await db.collection("users").get();
  return docs.docs.map((doc) => doc.data());
};
