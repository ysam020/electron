import axios from "axios";

export async function disableWebAuthn() {
  try {
    const res = await axios(
      `https://sameer-yadav.online/api/disable-webauthn`,
      { withCredentials: true }
    );
    alert(res.data.message);
  } catch (error) {
    console.log(error);
  }
}
