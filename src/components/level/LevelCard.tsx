import { Card, CardContent, Chip, CircularProgress } from '@mui/material';
import { FC } from 'react';
import { Item, Level, Plant } from '../../api/models';
import { get } from '../../api/services/CrudService';
import { useGet } from '../../api/services/hooks/useGenericService';
import { API_BASE_CONFIG, API_OBJECT } from '../../config/ApiBaseConfig';
import { cardThemeBrownSx } from '../../constants/theme';
import { keyValueText as gridKeyValueText } from '../ui/utils/valueMapping';
import { ARR_JOINER } from '../../constants/constants';
import { usePvZContext } from '../../provider/PvZProvider';

interface LevelCardProps {
  data: unknown;
}

const LevelCard: FC<LevelCardProps> = ({ data }) => {
  const { t } = usePvZContext();
  const level = data as Level;
  const plantConfig = API_BASE_CONFIG.filter(
    (v) => v.name === API_OBJECT.PLANT
  )?.[0];
  const itemConfig = API_BASE_CONFIG.filter(
    (v) => v.name === API_OBJECT.ITEM
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

  const { data: items } = useGet(
    itemConfig.queryKey,
    get,
    `/api/${itemConfig.route}`,
    false,
    {
      cacheTime: Infinity,
      staleTime: Infinity,
    }
  );

  if (!level || !items || !plants) {
    return <CircularProgress />;
  }

  const keyValueText = (data: unknown, param: string): JSX.Element | null =>
    gridKeyValueText(data, param, {
      key: cardThemeBrownSx.title,
      value: cardThemeBrownSx.body,
    });

  const mapUnlockKeyAndValue = (level: Level): JSX.Element | null => {
    let uiValue;
    if (level.ref === itemConfig.name) {
      const itemsArr = items as Item[];
      const filteredItems = itemsArr
        ?.filter((item) => level.unlock.includes(item?._id || ''))
        .map((item) => item.name);
      return keyValueText(
        filteredItems.join(ARR_JOINER),
        t('components.level.unlock')
      );
    } else if (level.ref === plantConfig.name) {
      const plantsArr = plants as Plant[];
      const filteredPlants = plantsArr
        ?.filter((plant) => level.unlock.includes(plant?._id || ''))
        .map((plant) => plant.name);
      return keyValueText(
        filteredPlants.join(ARR_JOINER),
        t('components.level.unlock')
      );
    } else {
      uiValue = null;
    }
    return uiValue;
  };

  return (
    <Card sx={cardThemeBrownSx.base}>
      <CardContent>
        {keyValueText(level?.level, t('components.level.level'))}
        {mapUnlockKeyAndValue(level)}
        {level.is_minigame && (
          <Chip label={t('components.level.minigame')} color="primary" />
        )}
      </CardContent>
    </Card>
  );
};

export default LevelCard;
