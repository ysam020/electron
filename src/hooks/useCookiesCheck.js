// hooks/useCookiesCheck.js
import { useEffect } from "react";

const useCookiesCheck = () => {
  useEffect(() => {
    if (!navigator.cookieEnabled) {
      alert(
        "Cookies are disabled in your browser. Please enable cookies to use this application."
      );
    }
  }, []);
};

export default useCookiesCheck;
