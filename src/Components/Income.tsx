import React, { useState, useEffect } from 'react';
import IncomeCard from './IncomeCard';
import { Box } from '@mui/material';
import { AddCircleOutlineOutlined } from '@mui/icons-material';
interface Income {
  id: number;
  itype: string;
  iname: string;
  idate: string;
  iamount: number;
}

const Income: React.FC = () => {
  const [filteredIncome, setFilteredIncome] = useState<Income[]>([]);

  useEffect(() => {
    fetch('http://localhost:8888/incomes')
      .then(response => response.json())
      .then(data => {
        filterIncome(data, 'this month');
      })
      .catch(error => console.error('Error fetching income:', error));
  }, []);

  const filterIncome = (data: Income[], period: string) => {
    const now = new Date();
    let filtered = data;

    if (period === 'today') {
      filtered = data.filter(income => new Date(income.idate).toDateString() === now.toDateString());
    } else if (period === 'this week') {
      const startOfWeek = new Date(now.setDate(now.getDate() - now.getDay()));
      filtered = data.filter(income => new Date(income.idate) >= startOfWeek);
    } else if (period === 'this month') {
      const startOfMonth = new Date(now.getFullYear(), now.getMonth(), 1);
      filtered = data.filter(income => new Date(income.idate) >= startOfMonth);
    } else if (period === 'last 3 months') {
      const startOfLast3Months = new Date(now.setMonth(now.getMonth() - 3));
      filtered = data.filter(income => new Date(income.idate) >= startOfLast3Months);
    }

    setFilteredIncome(filtered);
  };

  return (
    <div>
      
      <h3 className='text-center'>MY INCOME</h3>{"  "}
      <Box 
        sx={{
          height: '85vh',
        overflowY:'scroll',
        backgroundColor: 'background.paper',
        margin: 'auto',
        width: '79.5rem'
        }}
      >
        {/* <h1 className='title'> My Income </h1> */}
        {filteredIncome.map(income => (
          <IncomeCard
            key={income.id}
            itype={income.itype}
            iname={income.iname}
            idate={income.idate}
            iamount={income.iamount}
          />
        ))}
      </Box>
      <button type='button' className='btn btn-secondary btn-sm my-button'> Add
      <AddCircleOutlineOutlined/> </button>
    </div>
  );
};

export default Income;
