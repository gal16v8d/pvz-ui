import type { Plant } from '@/api/models';
import { get } from '@/api/services/CrudService';
import { useGet } from '@/api/services/hooks/useGenericService';
import { API_BASE_CONFIG, API_OBJECT } from '@/config/ApiBaseConfig';
import { ARR_JOINER, ZOMBIE_IMAGES } from '@/constants/constants';
import { cardThemeZombieSx } from '@/constants/theme';
import { usePvZContext } from '@/provider/PvZContext';
import { Card, CardContent, CircularProgress, Typography } from '@mui/material';
import { keyValueText as gridKeyValueText } from '../ui/utils/valueMapping';
import { useZombieContext } from './ZombieContext';
import type { ReactElement, ReactNode } from 'react';
import MediaCard from '../base/MediaCard';

const ZombieDetails = (): ReactElement | null => {
  const { t } = usePvZContext();
  const { zombie } = useZombieContext();
  const plantConfig = API_BASE_CONFIG.filter(
    (v) => v.name === API_OBJECT.PLANT
  )?.[0];
  const { data: plants } = useGet(
    plantConfig.queryKey,
    get,
    `/api/${plantConfig.route}`,
    false,
    {
      gcTime: Infinity,
      staleTime: Infinity,
    }
  );

  if (!plants) {
    return <CircularProgress />;
  }

  if (!zombie) {
    return null;
  }

  const keyValueText = (data: unknown, param: string): ReactNode | null =>
    gridKeyValueText(data, param, {
      key: cardThemeZombieSx.key,
      value: cardThemeZombieSx.value,
    });

  const transformWeakness = (
    weakness: Array<string> | undefined
  ): string | undefined => {
    if (weakness) {
      const plantsArr = plants as Array<Plant>;
      const filteredPlants = plantsArr
        ?.filter((plant) => weakness.includes(plant?._id || ''))
        .map((plant) => plant.name);
      return filteredPlants.join(ARR_JOINER);
    }
    return undefined;
  };

  const transformExtraToughness = (toughnessKey: string): string => {
    return toughnessKey
      .split('_')
      .map((value) => value.charAt(0).toUpperCase() + value.slice(1))
      .join(' ');
  };

  return (
    <Card sx={cardThemeZombieSx.base}>
      <MediaCard
        images={ZOMBIE_IMAGES}
        data={zombie}
        dataType="zombies"
        sx={cardThemeZombieSx.media}
      />
      <CardContent>
        <Typography sx={cardThemeZombieSx.title}>{zombie?.name}</Typography>
        {zombie?.description && (
          <Typography sx={cardThemeZombieSx.description}>
            {zombie?.description}
          </Typography>
        )}
        {keyValueText(zombie?.toughness, t('components.zombie.toughness'))}
        {zombie?.toughness_notes &&
          Object.entries(zombie?.toughness_notes).map(([k, v]) =>
            keyValueText(v, transformExtraToughness(k))
          )}
        {keyValueText(
          zombie?.speed_notes ?? zombie?.speed,
          t('components.zombie.speed')
        )}
        {keyValueText(zombie?.special, t('components.zombie.special'))}
        {keyValueText(
          transformWeakness(zombie?.weakness),
          t('components.zombie.weakness')
        )}
        {zombie?.constraint && (
          <Typography sx={cardThemeZombieSx.constraint_water}>
            {zombie?.constraint}
          </Typography>
        )}
        <Typography sx={cardThemeZombieSx.text}>{zombie.text}</Typography>
      </CardContent>
    </Card>
  );
};

export default ZombieDetails;
