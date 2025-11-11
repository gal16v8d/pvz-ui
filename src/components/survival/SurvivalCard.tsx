import type { Survival } from '@/api/models';
import { SURVIVAL_IMAGES } from '@/constants/constants';
import { cardThemeGraySx } from '@/constants/theme';
import { usePvZContext } from '@/provider/PvZContext';
import { Card, CardContent, Chip, Typography } from '@mui/material';
import type { FC, ReactElement, ReactNode } from 'react';
import MediaCard from '../base/MediaCard';

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
      <MediaCard
        images={SURVIVAL_IMAGES}
        data={survival}
        dataType="survivals"
        sx={cardThemeGraySx.media}
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
