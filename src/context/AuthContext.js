// // AuthContext.js
// import { createContext, useState, useEffect } from 'react';
// import {jwtDecode} from 'jwt-decode';

// export const AuthContext = createContext();

// const AuthProvider = ({ children }) => {
//   const [isAuthenticated, setIsAuthenticated] = useState(false);
//   const [userRole, setUserRole] = useState(null);

//   useEffect(() => {
//     const token = localStorage.getItem('token');
//     if (token) {
//       const decodedToken = jwtDecode(token);
//       setIsAuthenticated(true);
//       setUserRole(decodedToken.role);
//     }
//   }, []);

//   const logout = () => {
//     setIsAuthenticated(false);
//     setUserRole(null);
//     localStorage.removeItem('token');
//   };

//   return (
//     <AuthContext.Provider value={{ isAuthenticated, userRole, logout }}>
//       {children}
//     </AuthContext.Provider>
//   );
// };

// export default AuthProvider; // Default export for AuthProvider

// // AuthContext.js
// import { createContext, useState, useEffect, useContext } from 'react';
// import {jwtDecode} from 'jwt-decode'; // Correcting the import for jwt-decode

// export const AuthContext = createContext();

// const AuthProvider = ({ children }) => {
//   const [isAuthenticated, setIsAuthenticated] = useState(false);
//   const [userRole, setUserRole] = useState(null);

//   useEffect(() => {
//     const token = localStorage.getItem('token');
//     if (token) {
//       const decodedToken = jwtDecode(token);
//       setIsAuthenticated(true);
//       setUserRole(decodedToken.role);
//     }
//   }, []);

//   const logout = () => {
//     setIsAuthenticated(false);
//     setUserRole(null);
//     localStorage.removeItem('token');
//   };

//   return (
//     <AuthContext.Provider value={{ isAuthenticated, userRole, logout }}>
//       {children}
//     </AuthContext.Provider>
//   );
// };

// // Custom hook to use the AuthContext
// export const useAuth = () => {
//   return useContext(AuthContext);
// };

// export default AuthProvider; // Default export for AuthProvider

// context/AuthContext.js
import React, { createContext, useContext, useState } from 'react';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(null);
  const [userRole, setUserRole] = useState(null); // Example state for user role

  const login = (newToken) => {
    setToken(newToken);
    // Optionally set user role or perform additional actions
  };

  const logout = () => {
    setToken(null);
    // Optionally clear user role or perform additional actions
  };

  return (
    <AuthContext.Provider value={{ login, logout, token, userRole }}>
      {children}
    </AuthContext.Provider>
  );
};

// Custom hook for using AuthContext
export const useAuth = () => {
  return useContext(AuthContext);
};
