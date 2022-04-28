import React from "react";
import {useNavigate} from "react-router-dom";
import {useIsLoggedIn} from "../hooks/useIsLoggedIn";

function ProtectedRoute({children}) {
  const isLoggedIn = useIsLoggedIn();
  let navigate = useNavigate();

  return isLoggedIn ? children : navigate("/");
}
export default ProtectedRoute;
