import { Card, CardContent, CardMedia, Typography } from '@mui/material';
import { ARR_JOINER } from '../../constants/constants';
import { cardThemePlantSx } from '../../constants/theme';
import { keyValueText as gridKeyValueText } from '../ui/utils/valueMapping';
import { usePlantContext } from './PlantProvider';
import { usePvZContext } from '../../provider/PvZProvider';

const PlantDetails = () => {
  const { t } = usePvZContext();
  const { plant } = usePlantContext();

  if (!plant) {
    return null;
  }

  const keyValueText = (data: unknown, param: string): JSX.Element | null =>
    gridKeyValueText(data, param, {
      key: cardThemePlantSx.key,
      value: cardThemePlantSx.value,
    });

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
        {keyValueText(
          plant?.production?.join(ARR_JOINER),
          t('components.plant.sun_prod')
        )}
        {keyValueText(plant?.toughness, t('components.plant.toughness'))}
        {plant?.damage &&
          !plant?.damage_notes &&
          keyValueText(
            plant?.damage.join(ARR_JOINER),
            t('components.plant.damage')
          )}
        {keyValueText(plant?.damage_notes, t('components.plant.damage'))}
        {keyValueText(plant?.range, t('components.plant.range'))}
        {keyValueText(plant?.firing_speed, t('components.plant.firing_spd'))}
        {keyValueText(
          plant?.usage?.join(ARR_JOINER),
          t('components.plant.usage')
        )}
        {keyValueText(plant?.special, t('components.plant.special'))}
        {plant?.constraint && (
          <Typography sx={cardThemePlantSx.constraint}>
            {plant?.constraint.join(ARR_JOINER)}
          </Typography>
        )}
        <Typography sx={cardThemePlantSx.text}>{plant.text}</Typography>
      </CardContent>
    </Card>
  );
};

export default PlantDetails;
