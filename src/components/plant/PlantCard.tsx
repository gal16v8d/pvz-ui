import type { Plant } from '@/api/models';
import { PLANT_IMAGES } from '@/constants/constants';
import { TEST_ID } from '@/constants/testid';
import { cardThemeGraySx } from '@/constants/theme';
import { Card, CardActionArea } from '@mui/material';
import type { FC, ReactElement } from 'react';
import { usePlantContext } from './PlantContext';
import MediaCard from '../base/MediaCard';

interface PlantCardProps {
  data: unknown;
}

const PlantCard: FC<PlantCardProps> = ({ data }): ReactElement => {
  const { setPlant } = usePlantContext();
  const plant = data as Plant;

  return (
    <Card sx={cardThemeGraySx.base}>
      <CardActionArea onClick={() => setPlant(plant)}>
        <MediaCard
          data={plant}
          dataType="plants"
          images={PLANT_IMAGES}
          sx={cardThemeGraySx.media}
          testId={TEST_ID.PlantCard}
        />
      </CardActionArea>
    </Card>
  );
};

export default PlantCard;
