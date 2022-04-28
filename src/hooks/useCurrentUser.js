import {onAuthStateChanged} from "firebase/auth";
import {useEffect, useState} from "react";
import {auth} from "../firebase/config";

export const useCurrentUser = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    return onAuthStateChanged(auth, (user) => {
      setUser(user);
    });
  }, []);

  return user;
};
