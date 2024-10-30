import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SignIn from './SignIn';
import MainDashboard from './MainDashboard';
import Expenses from './Expenses';
import Income from './Income';
import Dashboard from './Dashboard';

const Routing: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SignIn />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="maindashboard" element={<MainDashboard />}>
          <Route index element={<Dashboard />} />
          <Route path="expenses" element={<Expenses />} />
          <Route path="income" element={<Income />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default Routing;
