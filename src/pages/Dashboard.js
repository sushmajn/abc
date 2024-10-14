import React, { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import QualityControlPage from './QualityControlPage';
import ProductionData from './ProductionPage'; 

const Dashboard = () => {
  const { userRole } = useContext(AuthContext);

  return (
    <>
      {userRole === 'operator' ? (
        <QualityControlPage /> 
      ) : (
        <ProductionData />
      )}
    </>
  );
};

export default Dashboard;