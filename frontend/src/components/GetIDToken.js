// src/components/GetIdToken.js
import { getAuth } from "firebase/auth";

export async function getIdToken() {
  const auth = getAuth();
  const user = auth.currentUser;

  if (!user) {
    console.warn("No user is currently logged in.");
    throw new Error("User not authenticated");
  }

  try {
    const token = await user.getIdToken();
    return token;
  } catch (err) {
    console.error("Failed to get idToken:", err);
    throw new Error("Unable to retrieve idToken");
  }
}
