import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';
import { AttachMoney, BusinessCenter, Savings, Home, Work } from '@mui/icons-material';
import { RestoreFromTrashOutlined } from '@mui/icons-material';
import { EditCalendarOutlined } from '@mui/icons-material';

interface IncomeCardProps {
  itype: string;
  iname: string;
  idate: string;
  iamount: number;
}

const iconMap: { [key: string]: JSX.Element } = {
  salary: <AttachMoney />,
  freelance: <Work />,
  investment: <Savings />,
  Bussiness: <BusinessCenter />,
  Rent: <Home />
};

const IncomeCard: React.FC<IncomeCardProps> = ({ itype, iname, idate, iamount }) => {
  return (
    
    <Card className="expense-card" sx={{ backgroundColor: '#d0bfd3',paddingBottom:'0px' }}>
      <CardContent className="card-content" sx={{ marginBottom:'-10px', padding:'67px', marginTop:'-5px', paddingBlock:'0px' }}>
        <div className="icon">{iconMap[itype]}</div>
        <div className="details">
          <Typography variant="h6" sx={{ fontSize: '0.875rem', padding: '2px', margin: '2px' }}>{iname}</Typography>
        </div>
        <div className='details'>
          <Typography variant="body2" sx={{ fontSize: '0.75rem', padding: '2px', margin: '2px' }}>{idate}</Typography>
        </div>
        <div className="actions">
          <div className='action-button'>
            <Typography variant="h6" className="amount" sx={{ fontSize: '0.875rem', padding: '2px', margin: '2px' }}>₹{iamount}</Typography>
            <button type='button' className='btn btn-outline-primary btn-sm'>
                                <EditCalendarOutlined />
                                </button>
            <button type='button' className='btn btn-outline-danger btn-sm'>
                                <RestoreFromTrashOutlined />
                                </button>
          </div>
        </div>
      </CardContent>
    </Card>
    
  );
};

export default IncomeCard;
