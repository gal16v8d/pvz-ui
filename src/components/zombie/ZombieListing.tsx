import { FC } from 'react';
import GridWrapper from '../ui/GridWrapper';
import ZombieCard from './ZombieCard';
import ZombieDetails from './ZombieDetails';
import { ZombieProvider } from './ZombieProvider';

interface ZombieListingProps {
  data: unknown[];
}

const ZombieListing: FC<ZombieListingProps> = ({ data }) => {
  return (
    <ZombieProvider>
      <GridWrapper
        gridColumns={2}
        child={
          <>
            <GridWrapper
              gridColumns={5}
              child={
                <>
                  {data?.map((d) => (
                    <ZombieCard data={d} />
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
