import React from "react";
import { Route, Navigate } from "react-router-dom";

import { useAuth } from "../contexts/Auth";

export function PrivateRoute({ children}) {
  const { user } = useAuth();

  return (
    
        // Renders the page only if `user` is present (user is authenticated)
        // Otherwise, redirect to the login page
      user ? children  : <Navigate to="/login" />
 
  );
}
