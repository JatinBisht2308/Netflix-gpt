import { auth } from "./firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
  signOut,
} from "firebase/auth";

export const signUpUser = async (displayName, email, password) => {
  try {
    const signUp = await createUserWithEmailAndPassword(auth, email, password);
    await updateProfile(signUp.user, {
      displayName: displayName,
    });
    console.log("whats in sign up:", signUp);
    return signUp?.user;
  } catch (error) {
    throw error;
  }
};

export const signInUser = async (email, password) => {
  try {
    const signIn = await signInWithEmailAndPassword(auth, email, password);
    console.log("whats in sign in:", signIn);
    return signIn?.user;
  } catch (error) {
    throw error;
  }
};

export const signOutUser = async () => {
  try {
    const signOutUser = await signOut(auth);
    localStorage.clear();
    console.log("sign out user:", signOutUser);
  } catch (error) {
    throw error;
  }
};
