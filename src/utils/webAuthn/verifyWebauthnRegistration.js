import axios from "axios";

export const verifyWebauthnRegistration = async (credential) => {
  try {
    const res = await axios.post(
      `https://sameer-yadav.online/api/webauthn/verify-registration`,
      { credential },
      { withCredentials: true }
    );
    if (res.data.verified) {
      alert("Registration successful!");
    } else {
      alert("Registration failed. Please try again.");
    }
  } catch (error) {
    console.log("Registration verification error:", error);
  }
};
