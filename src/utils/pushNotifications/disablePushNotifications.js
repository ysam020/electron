import axios from "axios";

export const disablePushNotifications = async () => {
  try {
    const res = await axios(
      `https://sameer-yadav.online/api/disable-push-notifications`,
      { withCredentials: true }
    );

    alert(res.data.message);
  } catch (error) {
    console.error("Error disabling push notifications:", error);
  }
};
