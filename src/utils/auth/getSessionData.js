import axios from "axios";

export const getSessionData = async (setGeolocation) => {
  try {
    const res = await axios.get(
      `https://sameer-yadav.online/api/get-session-data`,
      { withCredentials: true }
    );
    setGeolocation(res.data || []);
  } catch (error) {
    console.error("Error fetching geolocation", error);
    setGeolocation([]);
  }
};
