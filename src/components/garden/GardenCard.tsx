import { Card, CardContent, CardMedia, Chip, Typography } from '@mui/material';
import { FC } from 'react';
import { Garden } from '../../api/models';
import { cardThemeBrownSx } from '../../constants/theme';
import { usePvZContext } from '../../provider/PvZProvider';

interface GardenCardProps {
  data: unknown;
}

const GardenCard: FC<GardenCardProps> = ({ data }) => {
  const { t } = usePvZContext();
  const garden = data as Garden;

  return (
    <Card sx={cardThemeBrownSx.base}>
      <CardMedia
        sx={{ height: 280 }}
        image={`/assets/gardens/${garden._id}.png`}
        title={`garden-${garden._id}`}
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
