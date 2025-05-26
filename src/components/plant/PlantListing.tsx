import type { Plant } from '@/api/models';
import type { FC, ReactElement } from 'react';
import GridWrapper from '../ui/GridWrapper';
import PlantCard from './PlantCard';
import PlantDetails from './PlantDetails';
import { PlantProvider } from './PlantProvider';

interface PlantListingProps {
  data: unknown[];
}

const PlantListing: FC<PlantListingProps> = ({ data }): ReactElement => {
  const plants = (data as Plant[])?.sort((a, b) => a.number - b.number);

  return (
    <PlantProvider>
      <GridWrapper
        gridColumns={2}
        gridId="toplevel-list-plants"
        child={
          <>
            <GridWrapper
              gridColumns={8}
              gridId="list-plants"
              child={
                <>
                  {plants?.map((d) => (
                    <PlantCard key={d._id} data={d} />
                  ))}
                </>
              }
            />
            <PlantDetails />
          </>
        }
      />
    </PlantProvider>
  );
};

export default PlantListing;
