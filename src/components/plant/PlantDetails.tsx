import { ARR_JOINER } from '@/constants/constants';
import { cardThemePlantSx } from '@/constants/theme';
import { usePvZContext } from '@/provider/PvZContext';
import type { SxProps } from '@mui/material';
import { Card, CardContent, CardMedia, Typography } from '@mui/material';
import { keyValueText as gridKeyValueText } from '../ui/utils/valueMapping';
import { usePlantContext } from './PlantContext';
import type { ReactElement, ReactNode } from 'react';

const PlantDetails = (): ReactElement | null => {
  const { t } = usePvZContext();
  const { plant } = usePlantContext();

  if (!plant) {
    return null;
  }

  const keyValueText = (data: unknown, param: string): ReactNode | null =>
    gridKeyValueText(data, param, {
      key: cardThemePlantSx.key,
      value: cardThemePlantSx.value,
    });

  const getConstraintTheme = (constraint: string): SxProps => {
    if (constraint.startsWith('Sleeps')) {
      return cardThemePlantSx.constraint_sleep;
    } else if (constraint.includes('water')) {
      return cardThemePlantSx.constraint_water;
    } else {
      return cardThemePlantSx.constraint_plant;
    }
  };

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
        {keyValueText(plant?.effect, t('components.plant.effect'))}
        {keyValueText(plant?.toughness, t('components.plant.toughness'))}
        {plant?.damage &&
          !plant?.damage_notes &&
          keyValueText(
            plant?.damage.join(ARR_JOINER),
            t('components.plant.damage')
          )}
        {keyValueText(plant?.damage_notes, t('components.plant.damage'))}
        {keyValueText(plant?.range, t('components.plant.range'))}
        {keyValueText(plant?.firing_speed, t('components.plant.firing_speed'))}
        {keyValueText(
          plant?.usage?.join(ARR_JOINER),
          t('components.plant.usage')
        )}
        {keyValueText(plant?.special, t('components.plant.special'))}
        {plant?.constraint &&
          plant?.constraint.map((constraint) => (
            <Typography sx={getConstraintTheme(constraint)} key={constraint}>
              {constraint}
            </Typography>
          ))}
        <Typography sx={cardThemePlantSx.text}>{plant.text}</Typography>
        {keyValueText(plant?.cost, t('components.plant.cost'))}
        {keyValueText(plant?.recharge, t('components.plant.recharge'))}
      </CardContent>
    </Card>
  );
};

export default PlantDetails;
