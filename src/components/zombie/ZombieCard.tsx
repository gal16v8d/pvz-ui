import type { Zombie } from '@/api/models';
import { cardThemeGraySx } from '@/constants/theme';
import { Card, CardActionArea, CardMedia } from '@mui/material';
import type { FC } from 'react';
import { useZombieContext } from './ZombieContext';
import { TEST_ID } from '@/constants/testid';

interface ZombieCardProps {
  data: unknown;
}

const ZombieCard: FC<ZombieCardProps> = ({ data }): React.ReactElement => {
  const { setZombie } = useZombieContext();
  const zombie = data as Zombie;

  return (
    <Card sx={cardThemeGraySx.base}>
      <CardActionArea onClick={() => setZombie(zombie)}>
        <CardMedia
          data-testid={`${TEST_ID.ZombieCard}-${zombie._id}`}
          sx={cardThemeGraySx.media}
          image={`/assets/zombies/${zombie._id}.png`}
          title={`zombie-${zombie._id}`}
        />
      </CardActionArea>
    </Card>
  );
};

export default ZombieCard;
