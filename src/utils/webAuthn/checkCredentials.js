import axios from "axios";

// Step 1: Check if WebAuthn credentials exist
export async function checkCredentials(username) {
  try {
    const response = await axios.post(
      `https://sameer-yadav.online/api/webauthn/credential-check`,
      { username },
      { withCredentials: true }
    );
    return response.data;
  } catch (error) {
    console.error("Credential check error:", error);
    return false;
  }
}
