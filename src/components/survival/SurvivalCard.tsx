import type { Survival } from '@/api/models';
import { cardThemeGraySx } from '@/constants/theme';
import { usePvZContext } from '@/provider/PvZContext';
import { Card, CardContent, CardMedia, Chip, Typography } from '@mui/material';
import type { FC, ReactElement, ReactNode } from 'react';

interface SurvivalCardProps {
  data: unknown;
}

const SurvivalCard: FC<SurvivalCardProps> = ({ data }): ReactElement => {
  const { t } = usePvZContext();
  const survival = data as Survival;

  const mapText = (input: string): ReactNode => (
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
          <Chip label={t('components.survival.endless')} color="primary" />
        ) : (
          mapText(
            `${t('components.survival.flags')}: ${String(survival.flags)}`
          )
        )}
      </CardContent>
    </Card>
  );
};

export default SurvivalCard;
