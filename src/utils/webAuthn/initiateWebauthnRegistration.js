import axios from "axios";
import { urlBase64ToUint8Array } from "./urlBase64ToUint8Array";
import { verifyWebauthnRegistration } from "./verifyWebauthnRegistration";

// Initiate WebAuthn Registration
export async function initiateWebauthnRegistration() {
  try {
    const registrationOptionsRes = await axios(
      `https://sameer-yadav.online/api/webauthn/register`,
      { withCredentials: true }
    );

    const challenge = urlBase64ToUint8Array(
      registrationOptionsRes.data.challenge
    );
    const userId = urlBase64ToUint8Array(registrationOptionsRes.data.user.id);

    const publicKeyOptions = {
      ...registrationOptionsRes.data,
      challenge,
      user: {
        ...registrationOptionsRes.data.user,
        id: userId,
      },
    };

    // Create credentials using WebAuthn API
    const credential = await navigator.credentials.create({
      publicKey: publicKeyOptions,
    });

    // Send the generated credential to verify and finalize registration
    await verifyWebauthnRegistration(credential);
  } catch (error) {
    console.log("Registration error:", error);
  }
}
