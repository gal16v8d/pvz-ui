import { Card, CardMedia } from '@mui/material';
import { FC } from 'react';
import { homeTheme } from '../../constants/theme';

const Home: FC = (): JSX.Element => {
  return (
    <Card sx={homeTheme.body}>
      <CardMedia
        sx={homeTheme.media}
        image={'/assets/home/pvz.png'}
        title={'logo'}
      />
    </Card>
  );
};

export default Home;
