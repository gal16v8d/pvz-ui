import { Card, CardContent, Typography } from '@mui/material';
import { FC } from 'react';
import { Achievement } from '../../api/models';

interface AchievementCardProps {
  data: unknown;
}

const AchievementCard: FC<AchievementCardProps> = ({ data }) => {
  const achievement = data as Achievement;

  return (
    <Card
      sx={{
        backgroundColor: 'rgb(102,51,0)',
        maxWidth: '350',
        fontSize: '0.875rem',
        fontWeight: '700',
      }}
    >
      <CardContent>
        <Typography
          sx={{
            color: 'green',
            textTransform: 'uppercase',
            typography: 'title',
          }}
          component={'div'}
        >
          {achievement.name}
        </Typography>
        <Typography sx={{ color: 'white', typography: 'body1' }}>
          {achievement.description}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default AchievementCard;
