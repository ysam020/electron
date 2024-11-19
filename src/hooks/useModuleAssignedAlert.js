import { useEffect } from "react";
import { db } from "../firebase";
import { doc, collection, onSnapshot } from "firebase/firestore";

function useModuleAssignedAlert(user, setUser) {
  useEffect(() => {
    if (user?.username) {
      const userDocRef = doc(db, "modules", user.username); // Reference to the user document
      const modulesCollectionRef = collection(userDocRef, "moduleName"); // Reference to the moduleName subcollection

      // Listen for changes in the moduleName subcollection for the user
      const unsubscribe = onSnapshot(modulesCollectionRef, (snapshot) => {
        const modulesData = [];

        snapshot.forEach((doc) => {
          modulesData.push(doc.id); // Collecting module names
        });

        // Update the user state with the latest module names
        setUser((prevUser) => {
          const newModules = [...new Set(modulesData)]; // Ensure unique module names
          const addedModules = newModules.filter(
            (module) => !prevUser.modules.includes(module)
          ); // Find new modules

          // Alert with names of newly assigned modules
          if (addedModules.length > 0) {
            alert(`New module(s) assigned: ${addedModules.join(", ")}`);
          }

          return {
            ...prevUser,
            modules: newModules,
          };
        });
      });

      // Clean up listener on component unmount
      return () => unsubscribe();
    }
    // eslint-disable-next-line
  }, [user?.username]);
}

export default useModuleAssignedAlert;
