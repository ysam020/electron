import axios from "axios";

export const logOutFromAllSessions = async (setUser, navigate) => {
  try {
    const res = await axios(
      `https://sameer-yadav.online/api/logout-from-all-sessions`,
      { withCredentials: true }
    );

    if (res.data.message === "Success") {
      setUser(null);
      navigate("/");
    } else {
      alert(res.data.message);
    }
  } catch (error) {
    console.error("Error occurred while logging out from all sessions:", error);
    alert("An error occurred while logging out from all sessions.");
  }
};
