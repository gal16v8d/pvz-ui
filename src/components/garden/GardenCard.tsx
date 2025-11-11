import type { Garden } from '@/api/models';
import { GARDEN_IMAGES } from '@/constants/constants';
import { cardThemeBrownSx } from '@/constants/theme';
import { usePvZContext } from '@/provider/PvZContext';
import { Card, CardContent, Chip, Typography } from '@mui/material';
import type { FC, ReactElement } from 'react';
import MediaCard from '../base/MediaCard';

interface GardenCardProps {
  data: unknown;
}

const GardenCard: FC<GardenCardProps> = ({ data }): ReactElement => {
  const { t } = usePvZContext();
  const garden = data as Garden;

  return (
    <Card sx={cardThemeBrownSx.base}>
      <MediaCard
        data={garden}
        dataType="gardens"
        images={GARDEN_IMAGES}
        sx={{ height: 280 }}
      />
      <CardContent>
        <Typography sx={cardThemeBrownSx.title} component={'div'}>
          {garden.name}
        </Typography>
        <Typography sx={cardThemeBrownSx.body}>
          {`${t('components.garden.max_plants')}: ${garden.max_plants}`}
        </Typography>
        {garden.coin_helper && (
          <Chip label={t('components.garden.coin_helper')} color="primary" />
        )}
      </CardContent>
    </Card>
  );
};

export default GardenCard;
