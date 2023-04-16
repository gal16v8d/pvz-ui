import { Card, CardActionArea, CardMedia } from '@mui/material';
import { FC } from 'react';
import { Zombie } from '../../api/models';
import { useZombieContext } from './ZombieProvider';
import { cardThemeGraySx } from '../../constants/theme';

interface ZombieCardProps {
  data: unknown;
}

const ZombieCard: FC<ZombieCardProps> = ({ data }): JSX.Element => {
  const { setZombie } = useZombieContext();
  const zombie = data as Zombie;

  return (
    <Card sx={cardThemeGraySx.base}>
      <CardActionArea onClick={() => setZombie(zombie)}>
        <CardMedia
          sx={cardThemeGraySx.media}
          image={`/assets/zombies/${zombie._id}.png`}
          title={`zombie-${zombie._id}`}
        />
      </CardActionArea>
    </Card>
  );
};

export default ZombieCard;
