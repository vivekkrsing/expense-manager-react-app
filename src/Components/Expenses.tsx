import React, { useState, useEffect } from 'react';
import ExpenseCard from './ExpenseCard';
import { Box } from '@mui/material';
import { AddCircleOutlineOutlined } from '@mui/icons-material';
interface Expense {
  id: number;
  type: string;
  name: string;
  date: string;
  amount: number;
}

const Expenses: React.FC = () => {
  const [filteredExpenses, setFilteredExpenses] = useState<Expense[]>([]);

  useEffect(() => {
    fetch('http://localhost:8888/expenses')
      .then(response => response.json())
      .then(data => {
        filterExpenses(data, 'this month');
      })
      .catch(error => console.error('Error fetching expenses:', error));
  }, []);

  const filterExpenses = (data: Expense[], period: string) => {
    const now = new Date();
    let filtered = data;

    if (period === 'today') {
      filtered = data.filter(expense => new Date(expense.date).toDateString() === now.toDateString());
    } else if (period === 'this week') {
      const startOfWeek = new Date(now.setDate(now.getDate() - now.getDay()));
      filtered = data.filter(expense => new Date(expense.date) >= startOfWeek);
    } else if (period === 'this month') {
      const startOfMonth = new Date(now.getFullYear(), now.getMonth(), 1);
      filtered = data.filter(expense => new Date(expense.date) >= startOfMonth);
    } else if (period === 'last 3 months') {
      const startOfLast3Months = new Date(now.setMonth(now.getMonth() - 3));
      filtered = data.filter(expense => new Date(expense.date) >= startOfLast3Months);
    }

    setFilteredExpenses(filtered);
  };

  return (

  <div> 
    
      <h3 className='text-center'>MY EXPENSES</h3>{"  "}
      
    <Box 
      sx={{
        height: '85vh',
        overflowY:'scroll',
        backgroundColor: 'background.paper',
        margin: 'auto',
        width: '79.5rem'
      }}
    >
      {/* <h1 className='title'> My Expenses </h1> */}
      {filteredExpenses.map(expense => (
        <ExpenseCard
          key={expense.id}
          type={expense.type}
          name={expense.name}
          date={expense.date}
          amount={expense.amount}
        />
      ))}
    </Box>{""}
    <button type='button' className='btn btn-secondary btn-sm my-button'> Add
      <AddCircleOutlineOutlined/> </button>
    </div>
    
  );
};

export default Expenses;
