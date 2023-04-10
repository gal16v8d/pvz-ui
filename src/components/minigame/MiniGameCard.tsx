import { Card, CardContent, CardMedia, Typography } from '@mui/material';
import { FC } from 'react';
import { MiniGame } from '../../api/models';
import { cardThemeGraySx } from '../../constants/theme';

interface MiniGameCardProps {
  data: unknown;
}

const MiniGameCard: FC<MiniGameCardProps> = ({ data }) => {
  const minigame = data as MiniGame;

  return (
    <Card sx={cardThemeGraySx.base}>
      <CardMedia
        sx={cardThemeGraySx.media}
        image={`/assets/minigames/${minigame._id}.png`}
        title={`minigame-${minigame._id}`}
      />
      <CardContent>
        <Typography
          sx={{
            padding: '1.5rem',
            ...cardThemeGraySx.title,
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
