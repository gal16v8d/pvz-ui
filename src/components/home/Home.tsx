import { Card, CardMedia } from '@mui/material';
import { FC } from 'react';

const Home: FC = () => {
  return (
    <Card
      sx={{
        backgroundColor: 'rgb(102,51,0)',
        maxWidth: '350',
        fontSize: '0.875rem',
        fontWeight: '700',
      }}
    >
      <CardMedia
        sx={{ height: 500 }}
        image={'/assets/home/pvz.png'}
        title={'logo'}
      />
    </Card>
  );
};

export default Home;
