import { Card, CardContent, Typography } from '@mui/material';
import { FC } from 'react';
import { cardThemeBrownSx } from '../../constants/theme';
import { Achievement } from '../../api/models';

interface AchievementCardProps {
  data: unknown;
}

const AchievementCard: FC<AchievementCardProps> = ({ data }) => {
  const achievement = data as Achievement;

  return (
    <Card sx={cardThemeBrownSx.base}>
      <CardContent>
        <Typography sx={cardThemeBrownSx.title} component={'div'}>
          {achievement.name}
        </Typography>
        <Typography sx={cardThemeBrownSx.body}>
          {achievement.description}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default AchievementCard;
