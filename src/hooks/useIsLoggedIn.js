import {onAuthStateChanged, signOut} from "firebase/auth";
import {useEffect, useState} from "react";
import {auth} from "../firebase/config";

export const useIsLoggedIn = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(null);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setIsLoggedIn(!!user);
    });
  }, []);

  return isLoggedIn;
};
