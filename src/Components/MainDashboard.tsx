import React from 'react';
import NavComp from './NavComp';
import { Outlet } from 'react-router-dom';
// import FooterComp from './FooterComp';


const MainDashboard: React.FC = () => {
  return (
  <div>
    
    <div className="dashboard-container">
      <div className="header">
        <NavComp />
      </div>
      <div className="body">
      
        <Outlet />
        
      </div>
      {/* <div className="footer">
        <FooterComp />
      </div> */}
    </div>
    </div>
  );
};

export default MainDashboard;
