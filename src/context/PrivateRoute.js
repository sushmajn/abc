import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { AuthContext } from ./AuthContext  // Assuming you're using an AuthContext

const PrivateRoute = ({ children }) => {
  const { isAuthenticated } = useContext(AuthContext);

  // If the user is not authenticated, redirect to login
  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  }

  // Otherwise, render the protected component
  return children;
};

export default PrivateRoute;
