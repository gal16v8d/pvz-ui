import type { Plant } from '@/api/models';
import { cardThemeGraySx } from '@/constants/theme';
import { Card, CardActionArea, CardMedia } from '@mui/material';
import type { FC, ReactElement } from 'react';
import { usePlantContext } from './PlantContext';
import { TEST_ID } from '@/constants/testid';

interface PlantCardProps {
  data: unknown;
}

const PlantCard: FC<PlantCardProps> = ({ data }): ReactElement => {
  const { setPlant } = usePlantContext();
  const plant = data as Plant;

  return (
    <Card sx={cardThemeGraySx.base}>
      <CardActionArea onClick={() => setPlant(plant)}>
        <CardMedia
          data-testid={`${TEST_ID.PlantCard}-${plant._id}`}
          sx={cardThemeGraySx.media}
          image={`/assets/plants/${plant._id}.png`}
          title={`plant-${plant._id}`}
        />
      </CardActionArea>
    </Card>
  );
};

export default PlantCard;
