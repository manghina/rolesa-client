import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../provider/authProvider";
export const RedirectedIfAuthenticated = () => {
    const { token } = useAuth();
  
    // Check if the user is authenticated
    if (token) {
      // If not authenticated, redirect to the login page
      return <Navigate to="/dashboard" />;
    }
  
    // If authenticated, render the child routes
    return <Outlet />;
  };