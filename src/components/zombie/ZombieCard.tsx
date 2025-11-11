import type { Zombie } from '@/api/models';
import { ZOMBIE_IMAGES } from '@/constants/constants';
import { TEST_ID } from '@/constants/testid';
import { cardThemeGraySx } from '@/constants/theme';
import { Card, CardActionArea } from '@mui/material';
import type { FC, ReactElement } from 'react';
import { useZombieContext } from './ZombieContext';
import MediaCard from '../base/MediaCard';

interface ZombieCardProps {
  data: unknown;
}

const ZombieCard: FC<ZombieCardProps> = ({ data }): ReactElement => {
  const { setZombie } = useZombieContext();
  const zombie = data as Zombie;

  return (
    <Card sx={cardThemeGraySx.base}>
      <CardActionArea onClick={() => setZombie(zombie)}>
        <MediaCard
          images={ZOMBIE_IMAGES}
          data={zombie}
          dataType="zombies"
          sx={cardThemeGraySx.media}
          testId={TEST_ID.ZombieCard}
        />
      </CardActionArea>
    </Card>
  );
};

export default ZombieCard;
