import { Card, CardContent, CardMedia, Typography } from '@mui/material';
import { cardThemePlantSx } from '../../constants/theme';
import GridWrapper from '../ui/GridWrapper';
import { usePlantContext } from './PlantProvider';

const PlantDetails = () => {
  const { plant } = usePlantContext();

  if (!plant) {
    return null;
  }

  const keyValueText = (data: unknown, param: string): JSX.Element | null =>
    data ? (
      <GridWrapper
        gridColumns={2}
        child={
          <>
            <Typography sx={cardThemePlantSx.key}>{`${param}:`}</Typography>
            <Typography sx={cardThemePlantSx.value}>
              {data as string}
            </Typography>
          </>
        }
      />
    ) : null;

  return (
    <Card sx={cardThemePlantSx.base}>
      <CardMedia
        component={'img'}
        sx={cardThemePlantSx.media}
        image={`/assets/plants/${plant._id}.png`}
        title={`plant-${plant._id}`}
      />
      <CardContent>
        <Typography sx={cardThemePlantSx.title}>{plant.name}</Typography>
        <Typography sx={cardThemePlantSx.description}>
          {plant.description}
        </Typography>
        {keyValueText(plant?.production?.join(','), 'Sun production')}
        {keyValueText(plant?.toughness, 'Toughness')}
        {plant?.damage &&
          !plant?.damage_notes &&
          keyValueText(plant?.damage.join(','), 'Damage')}
        {keyValueText(plant?.damage_notes, 'Damage')}
        {keyValueText(plant?.range, 'Range')}
        {keyValueText(plant?.firing_speed, 'Firing Speed')}
        {keyValueText(plant?.usage?.join(','), 'Usage')}
        {keyValueText(plant?.special, 'Special')}
        {plant?.constraint && (
          <Typography sx={cardThemePlantSx.constraint}>
            {plant?.constraint.join(',')}
          </Typography>
        )}
        <Typography sx={cardThemePlantSx.text}>{plant.text}</Typography>
      </CardContent>
    </Card>
  );
};

export default PlantDetails;
