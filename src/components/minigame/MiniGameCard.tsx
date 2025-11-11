import type { MiniGame } from '@/api/models';
import { MINIGAME_IMAGES } from '@/constants/constants';
import { cardThemeGraySx } from '@/constants/theme';
import { Card, CardContent, Typography } from '@mui/material';
import type { FC, ReactElement } from 'react';
import MediaCard from '../base/MediaCard';

interface MiniGameCardProps {
  data: unknown;
}

const MiniGameCard: FC<MiniGameCardProps> = ({ data }): ReactElement => {
  const minigame = data as MiniGame;

  return (
    <Card sx={cardThemeGraySx.base}>
      <MediaCard
        data={minigame}
        dataType="minigames"
        images={MINIGAME_IMAGES}
        sx={cardThemeGraySx.media}
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
