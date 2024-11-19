import axios from "axios";
import { verifyWebauthnLogin } from "./verifyWebauthnLogin";

// Initiate WebAuthn Login
export const initiateWebauthnLogin = async (username, geolocation, setUser) => {
  try {
    const loginOptionsRes = await axios.post(
      `https://sameer-yadav.online/api/webauthn/login`,
      { username },
      { withCredentials: true }
    );

    const options = loginOptionsRes.data;

    // Convert challenge to Uint8Array
    options.challenge = new Uint8Array(
      options.challenge.match(/.{1,2}/g).map((byte) => parseInt(byte, 16))
    );

    // Convert allowCredentials ID from Buffer to Uint8Array
    options.allowCredentials.forEach((cred) => {
      cred.id = new Uint8Array(cred.id.data);
    });

    const credential = await navigator.credentials.get({
      publicKey: options,
    });

    const serializedCredential = {
      id: credential.id,
      type: credential.type,
      rawId: Array.from(new Uint8Array(credential.rawId)),
      response: {
        authenticatorData: Array.from(
          new Uint8Array(credential.response.authenticatorData)
        ),
        clientDataJSON: Array.from(
          new Uint8Array(credential.response.clientDataJSON)
        ),
        signature: Array.from(new Uint8Array(credential.response.signature)),
        userHandle: credential.response.userHandle
          ? Array.from(new Uint8Array(credential.response.userHandle))
          : null,
      },
    };
    await verifyWebauthnLogin(
      username,
      serializedCredential,
      geolocation,
      setUser
    );
  } catch (error) {
    console.log("Login initiation error:", error);
  }
};
