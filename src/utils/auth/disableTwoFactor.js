import axios from "axios";

export async function disableTwoFactor(setIsTwoFactorEnabled) {
  try {
    const res = await axios(
      `https://sameer-yadav.online/api/disable-two-factor`,
      { withCredentials: true }
    );
    if (res.data.message === "Two factor authentication disabled") {
      setIsTwoFactorEnabled(false);
    } else {
      alert(res.data.message);
    }
  } catch (error) {
    console.log(error);
  }
}
