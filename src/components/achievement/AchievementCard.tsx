import type { Achievement } from '@/api/models';
import { ACHIEVEMENT_IMAGES } from '@/constants/constants';
import { cardThemeBrownSx } from '@/constants/theme';
import { Card, CardContent, Typography } from '@mui/material';
import type { FC, ReactElement } from 'react';
import GridWrapper from '../ui/GridWrapper';
import MediaCard from '../base/MediaCard';

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
            <MediaCard
              data={achievement}
              dataType="achievements"
              images={ACHIEVEMENT_IMAGES}
              sx={cardThemeBrownSx.media}
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
