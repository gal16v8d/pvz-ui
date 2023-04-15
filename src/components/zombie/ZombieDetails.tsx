import {
  Card,
  CardContent,
  CardMedia,
  CircularProgress,
  Typography,
} from '@mui/material';
import { Plant } from '../../api/models';
import { get } from '../../api/services/CrudService';
import { useGet } from '../../api/services/hooks/useGenericService';
import { API_BASE_CONFIG, API_OBJECT } from '../../config/ApiBaseConfig';
import { cardThemeZombieSx } from '../../constants/theme';
import { keyValueText as gridKeyValueText } from '../ui/utils/valueMapping';
import { useZombieContext } from './ZombieProvider';

const ZombieDetails = () => {
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
      cacheTime: Infinity,
      staleTime: Infinity,
    }
  );

  if (!plants) {
    return <CircularProgress />;
  }

  if (!zombie) {
    return null;
  }

  const keyValueText = (data: unknown, param: string): JSX.Element | null =>
    gridKeyValueText(data, param, {
      key: cardThemeZombieSx.key,
      value: cardThemeZombieSx.value,
    });

  const transformWeakness = (weakness: string[] | undefined) => {
    if (weakness) {
      const plantObjects = plants as Plant[];
      const filteredPlants = plantObjects
        ?.filter((plant) => weakness.includes(plant?._id || ''))
        .map((plant) => plant.name);
      return filteredPlants.join(',');
    }
    return undefined;
  };

  return (
    <Card sx={cardThemeZombieSx.base}>
      <CardMedia
        component={'img'}
        sx={cardThemeZombieSx.media}
        image={`/assets/zombies/${zombie._id}.png`}
        title={`zombie-${zombie._id}`}
      />
      <CardContent>
        <Typography sx={cardThemeZombieSx.title}>{zombie?.name}</Typography>
        {zombie?.description && (
          <Typography sx={cardThemeZombieSx.description}>
            {zombie?.description}
          </Typography>
        )}
        {keyValueText(zombie?.toughness, 'Toughness')}
        {zombie?.toughness_notes &&
          Object.entries(zombie?.toughness_notes).map(([k, v]) =>
            keyValueText(v, k)
          )}
        {keyValueText(zombie?.speed_notes ?? zombie?.speed, 'Speed')}
        {keyValueText(zombie?.special, 'Special')}
        {keyValueText(transformWeakness(zombie?.weakness), 'Weakness')}
        {zombie?.constraint && (
          <Typography sx={cardThemeZombieSx.constraint}>
            {zombie?.constraint}
          </Typography>
        )}
        <Typography sx={cardThemeZombieSx.text}>{zombie.text}</Typography>
      </CardContent>
    </Card>
  );
};

export default ZombieDetails;
