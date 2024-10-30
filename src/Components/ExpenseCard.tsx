import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';
import { FoodBank, DirectionsBus, Movie } from '@mui/icons-material';
import SportsCricketIcon from '@mui/icons-material/SportsCricket';
import { DinnerDiningOutlined } from '@mui/icons-material';
import { RestoreFromTrashOutlined } from '@mui/icons-material';
import { EditCalendarOutlined } from '@mui/icons-material';


interface ExpenseCardProps {
  type: string;
  name: string;
  date: string;
  amount: number;
}

const iconMap: { [key: string]: JSX.Element } = {
  food: <FoodBank />,
  transport: <DirectionsBus />,
  entertainment: <Movie />,
  Sports: <SportsCricketIcon />,
  Outing: <DinnerDiningOutlined />
};

const ExpenseCard: React.FC<ExpenseCardProps> = ({ type, name, date, amount }) => {
  return (
    <Card className="expense-card" sx={{ backgroundColor: 'cornsilk',paddingBottom:'0px' }}>
      <CardContent className="card-content" sx={{ marginBottom:'-10px', padding:'67px', marginTop:'-5px', paddingBlock:'0px' }}>
        <div className="icon">{iconMap[type]}</div>
        <div className="details">
          <Typography variant="h6" sx={{ fontSize: '0.875rem', padding: '2px', margin: '2px' }}>{name}</Typography>
        </div>
        <div className='details'>
          <Typography variant="body2" sx={{ fontSize: '0.75rem', padding: '2px', margin: '2px' }}>{date}</Typography>
        </div>
        <div className="actions">
          <div className='action-button'>
            <Typography variant="h6" className="amount" sx={{ fontSize: '0.875rem', padding: '2px', margin: '2px' }}>₹{amount}</Typography>
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

export default ExpenseCard;
