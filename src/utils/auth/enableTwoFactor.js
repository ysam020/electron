import axios from "axios";

export async function enableTwoFactor(
  user,
  setIsTwoFactorEnabled,
  setQr,
  setUser
) {
  try {
    const res = await axios(
      `https://sameer-yadav.online/api/enable-two-factor`,
      { withCredentials: true }
    );
    setQr(res.data.qrCodeImage);
    setIsTwoFactorEnabled(true);
    setUser({
      ...user,
      backupCodes: res.data.backupCodes,
      isTwoFactorEnabled: true,
      qrCodeImage: res.data.qrCodeImage,
    });
  } catch (error) {
    console.log(error);
  }
}
