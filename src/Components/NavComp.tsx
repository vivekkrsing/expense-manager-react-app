
import React from 'react';
import { Link } from 'react-router-dom';

const NavComp: React.FC = () => {
  return (
    <div>
      <Link to="/maindashboard" className='btn btn-secondary'>HOME</Link>{" "}
      <Link to="/maindashboard/expenses" className='btn btn-danger'>EXPENSES</Link>{" "}
      <Link to="/maindashboard/income" className='btn btn-success'>INCOME</Link>
      </div>
  );
};

export default NavComp;
