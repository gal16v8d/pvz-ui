import type { DataId } from '@/types/DataId';
import type { FC, ReactElement } from 'react';
import GridWrapper from '../ui/GridWrapper';
import ZombieCard from './ZombieCard';
import ZombieDetails from './ZombieDetails';
import { ZombieProvider } from './ZombieProvider';

interface ZombieListingProps {
  data: unknown[];
}

const ZombieListing: FC<ZombieListingProps> = ({ data }): ReactElement => {
  return (
    <ZombieProvider>
      <GridWrapper
        gridColumns={2}
        gridId="toplevel-list-zombies"
        child={
          <>
            <GridWrapper
              gridColumns={5}
              gridId="list-zombies"
              child={
                <>
                  {data?.map((d) => (
                    <ZombieCard key={(d as DataId)._id} data={d} />
                  ))}
                </>
              }
            />
            <ZombieDetails />
          </>
        }
      />
    </ZombieProvider>
  );
};

export default ZombieListing;
