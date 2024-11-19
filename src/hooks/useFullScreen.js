import { useEffect } from "react";
import { toggleFullScreen } from "../utils/keyboard-shortcuts/toggleFullScreen";

function useFullScreen() {
  useEffect(() => {
    const handleKeyDown = (event) => {
      // Check for Shift + S (Shift key and 'S' key)
      if (event.shiftKey && event.key === "S") {
        toggleFullScreen();
      }

      // Check for Ctrl + F (Control key and 'F' key)
      if (event.ctrlKey && event.key === "f") {
        toggleFullScreen();
      }
    };

    // Attach event listener
    window.addEventListener("keydown", handleKeyDown);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);
}

export default useFullScreen;
