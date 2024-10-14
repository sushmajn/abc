import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const AdminRoute = ({ component: Component, ...rest }) => {
  const { isAuthenticated, userRole } = useAuth();

  return (
    <Route
      {...rest}
      render={props =>
        isAuthenticated && userRole === 'admin' ? (
          <Component {...props} />
        ) : (
          <Redirect to="/login" />
        )
      }
    />
  );
};

export default AdminRoute;
