import { Card, CardContent, Chip, CircularProgress } from '@mui/material';
import { FC } from 'react';
import { Level } from '../../api/models';
import { get } from '../../api/services/CrudService';
import { useGet } from '../../api/services/hooks/useGenericService';
import { API_BASE_CONFIG, API_OBJECT } from '../../config/ApiBaseConfig';
import { cardThemeBrownSx } from '../../constants/theme';
import { keyValueText as gridKeyValueText } from '../ui/utils/valueMapping';

interface LevelCardProps {
  data: unknown;
}

const LevelCard: FC<LevelCardProps> = ({ data }) => {
  const level = data as Level;
  const plantConfig = API_BASE_CONFIG.filter(
    (v) => v.name === API_OBJECT.PLANT
  )?.[0];
  const itemConfig = API_BASE_CONFIG.filter(
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
      value: cardThemeBrownSx.title,
    });

  return (
    <Card sx={cardThemeBrownSx.base}>
      <CardContent>
        {keyValueText(level?.level, 'Level')}
        {level.is_minigame && <Chip label={'Minigame'} color="primary" />}
      </CardContent>
    </Card>
  );
};

export default LevelCard;
