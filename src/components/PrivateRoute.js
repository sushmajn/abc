// // PrivateRoute.js
// import React from 'react';
// import { Navigate, Route} from 'react-router-dom';
// import { useAuth } from '../context/AuthContext'; // Ensure this is correctly imported

// const PrivateRoute = ({ component: Component, ...rest }) => {
//   const { isAuthenticated } = useAuth(); // Get the authentication status from AuthContext

//   return (
//     <Route
//       {...rest}
//       render={props =>
//         isAuthenticated ? ( // Check if the user is authenticated
//           <Component {...props} />
//         ) : (
//           <Navigate to="/login" /> // Redirect to login if not authenticated
//         )
//       }
//     />
//   );
// };

// export default PrivateRoute;


// src/components/PrivateRoute.js
import React from 'react';
import { Navigate, Route } from 'react-router-dom';
import { useAuth } from '../context/AuthContext'; // Ensure this path is correct

const PrivateRoute = ({ component: Component, ...rest }) => {
  const { token } = useAuth(); // Get authentication token from context

  return (
    <Route
      {...rest}
      element={token ? <Component /> : <Navigate to="/login" />} // Use 'element' for react-router v6
    />
  );
};

export default PrivateRoute;
