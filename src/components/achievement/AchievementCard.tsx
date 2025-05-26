import type { Achievement } from '@/api/models';
import { cardThemeBrownSx } from '@/constants/theme';
import { Card, CardContent, CardMedia, Typography } from '@mui/material';
import type { FC, ReactElement } from 'react';
import GridWrapper from '../ui/GridWrapper';

interface AchievementCardProps {
  data: unknown;
}

const AchievementCard: FC<AchievementCardProps> = ({ data }): ReactElement => {
  const achievement = data as Achievement;

  return (
    <Card sx={cardThemeBrownSx.base}>
      <GridWrapper
        gridColumns={2}
        gridId={`achievement-${achievement._id}`}
        child={
          <>
            <CardMedia
              sx={cardThemeBrownSx.media}
              component={'img'}
              image={`/assets/achievements/${achievement._id}.png`}
              title={`achievements-${achievement._id}`}
            />
            <CardContent>
              <Typography sx={cardThemeBrownSx.title} component={'div'}>
                {achievement.name}
              </Typography>
              <Typography sx={cardThemeBrownSx.body}>
                {achievement.description}
              </Typography>
            </CardContent>
          </>
        }
      />
    </Card>
  );
};

export default AchievementCard;
