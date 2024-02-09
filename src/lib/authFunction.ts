import { auth } from "@/firebase/firebase";
import { GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";

export async function signInWithGoogle() {
  const provider = new GoogleAuthProvider();
  try {
    await signInWithPopup(auth, provider);
  } catch (error) {
    console.error("Error signing in with Google", error);
  }
}

export async function signOutUser() {
  try {
    await signOut(auth);
  } catch (error) {
    console.error("Error signing out with Google", error);
  }
}
