import { Card, CardContent, CardMedia, Chip, Typography } from '@mui/material';
import { FC } from 'react';
import { cardThemeGraySx } from '../../constants/theme';
import { Survival } from '../../api/models';

interface SurvivalCardProps {
  data: unknown;
}

const SurvivalCard: FC<SurvivalCardProps> = ({ data }) => {
  const survival = data as Survival;

  const mapText = (input: string) => (
    <Typography sx={cardThemeGraySx.title} component={'div'}>
      {input}
    </Typography>
  );

  return (
    <Card sx={cardThemeGraySx.base}>
      <CardMedia
        sx={cardThemeGraySx.media}
        image={`/assets/survivals/${survival._id}.png`}
        title={`survival-${survival._id}`}
      />
      <CardContent>
        {mapText(survival.name)}
        {survival.endless ? (
          <Chip label={'Endless'} color="primary" />
        ) : (
          mapText(`Flags: ${String(survival.flags)}`)
        )}
      </CardContent>
    </Card>
  );
};

export default SurvivalCard;
