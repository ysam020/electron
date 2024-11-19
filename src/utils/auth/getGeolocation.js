export const getGeolocation = async () => {
  try {
    // Fetch the public IP address
    const ipResponse = await fetch("https://api.ipify.org?format=json");
    const ipData = await ipResponse.json();
    const ip = ipData.ip;

    // Fetch geolocation data using the public IP
    const geoResponse = await fetch(`https://ipapi.co/${ip}/json/`);
    const geoData = await geoResponse.json();
    return {
      latitude: geoData.latitude,
      longitude: geoData.longitude,
    };
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};
