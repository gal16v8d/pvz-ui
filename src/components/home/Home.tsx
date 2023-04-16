import { homeTheme } from '@/constants/theme';
import { usePvZContext } from '@/provider/PvZProvider';
import { Box, Card, CardMedia, Typography } from '@mui/material';
import { FC } from 'react';

const Home: FC = (): JSX.Element => {
  const { t } = usePvZContext();

  return (
    <Box>
      <Box
        sx={{ alignItems: 'center', display: 'flex', flexDirection: 'column' }}
      >
        <Typography
          sx={{
            backgroundColor: 'var(--gray-900)',
            color: 'var(--surface-900)',
          }}
        >
          {t('components.home.text')}
        </Typography>
      </Box>
      <Card sx={homeTheme.body}>
        <CardMedia
          sx={homeTheme.media}
          image={'/assets/home/pvz.png'}
          title={'logo'}
        />
      </Card>
    </Box>
  );
};

export default Home;
