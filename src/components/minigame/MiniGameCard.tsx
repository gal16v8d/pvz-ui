import { Card, CardContent, CardMedia, Typography } from '@mui/material';
import { FC } from 'react';
import { MiniGame } from '../../api/models';

interface MiniGameCardProps {
  data: unknown;
}

const MiniGameCard: FC<MiniGameCardProps> = ({ data }) => {
  const minigame = data as MiniGame;

  return (
    <Card
      sx={{
        backgroundColor: 'rgb(192,192,192)',
        maxWidth: '350',
        fontSize: '0.875rem',
        fontWeight: '700',
      }}
    >
      <CardMedia
        sx={{ height: 180, border: 'solid 2px rgb(192,192,192)' }}
        image={`/assets/minigames/${minigame._id}.png`}
        title={`minigame-${minigame._id}`}
      />
      <CardContent>
        <Typography
          sx={{
            backgroundColor: 'rgb(211,211,211)',
            typography: 'title',
            border: 'solid 2px rgb(211,211,211)',
            padding: '1.5rem',
            color: 'rgb(75,104,184)',
          }}
          component={'div'}
        >
          {minigame.name}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default MiniGameCard;
