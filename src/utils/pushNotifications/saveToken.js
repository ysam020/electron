import axios from "axios";

// Save FCM token
export const saveToken = async (token) => {
  try {
    const res = await axios.post(
      `https://sameer-yadav.online/api/save-fcm-token`,
      { fcmToken: token },
      { withCredentials: true }
    );

    alert(res.data.message);
  } catch (error) {
    console.error("Error saving token:", error);
  }
};
