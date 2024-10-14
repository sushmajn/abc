// // index.js
// import React from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import ReactDOM from 'react-dom/client';
// import App from './App';
// import AuthProvider from './context/AuthContext'; // Default import (no curly braces)

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <AuthProvider>
//     <App />
//   </AuthProvider>
// );

// index.js
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import ReactDOM from 'react-dom/client';
import App from './App';
import { AuthProvider } from './context/AuthContext'; // Named import with curly braces

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <AuthProvider>
    <App />
  </AuthProvider>
);
