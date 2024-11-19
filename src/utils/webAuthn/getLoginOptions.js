import axios from "axios";

// Step 2: Retrieve WebAuthn login options
export async function getLoginOptions(username) {
  try {
    const response = await axios.post(
      `https://sameer-yadav.online/api/webauthn/login`,
      { username },
      { withCredentials: true }
    );
    return response.data;
  } catch (error) {
    console.error("Login options error:", error);
    return null;
  }
}
