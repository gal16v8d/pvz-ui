import { homeTheme } from '@/constants/theme';
import { usePvZContext } from '@/provider/PvZContext';
import { Box, Button, Card, CardMedia, Typography } from '@mui/material';
import type { FC, ReactElement } from 'react';

const Home: FC = (): ReactElement => {
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
      <Card>
        <Box
          sx={{
            textAlign: 'center',
            padding: '16px',
            backgroundColor: 'var(--gray-900)',
            color: 'var(--surface-900)',
          }}
        >
          <Button
            variant="contained"
            href={import.meta.env.VITE_KOFI_TARGET}
            target="_blank"
            rel="noopener noreferrer"
            sx={{
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '8px',
            }}
          >
            <img
              src={'/assets/home/kofi.png'}
              alt={'Ko-fi Cup'}
              style={{ width: '24px', height: '24px' }}
            />
            {t('components.home.support_me')}
          </Button>
        </Box>
      </Card>
    </Box>
  );
};

export default Home;
