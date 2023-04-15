import { Card, CardActionArea, CardMedia } from '@mui/material';
import { FC } from 'react';
import { Plant } from '../../api/models';
import { cardThemeGraySx } from '../../constants/theme';
import { usePlantContext } from './PlantProvider';

interface PlantCardProps {
  data: unknown;
}

const PlantCard: FC<PlantCardProps> = ({ data }) => {
  const { setPlant } = usePlantContext();
  const plant = data as Plant;

  return (
    <Card sx={cardThemeGraySx.base}>
      <CardActionArea onClick={() => setPlant(plant)}>
        <CardMedia
          sx={cardThemeGraySx.media}
          image={`/assets/plants/${plant._id}.png`}
          title={`plant-${plant._id}`}
        />
      </CardActionArea>
    </Card>
  );
};

export default PlantCard;
