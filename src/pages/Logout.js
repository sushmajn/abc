import { useContext, useEffect } from 'react';
import { AuthContext } from '../context/AuthContext'; // Correct import for AuthContext
import { useNavigate } from 'react-router-dom';

const Logout = () => {
  const { logout } = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    logout(); // Trigger logout
    navigate('/login'); // Redirect to login
  }, [logout, navigate]);

  return null; // No UI needed
};

export default Logout;
