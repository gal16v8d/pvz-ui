import { Plant } from '@/api/models';
import { FC } from 'react';
import GridWrapper from '../ui/GridWrapper';
import PlantCard from './PlantCard';
import PlantDetails from './PlantDetails';
import { PlantProvider } from './PlantProvider';

interface PlantListingProps {
  data: unknown[];
}

const PlantListing: FC<PlantListingProps> = ({ data }): React.ReactElement => {
  const plants = (data as Plant[])?.sort((a, b) => a.number - b.number);

  return (
    <PlantProvider>
      <GridWrapper
        gridColumns={2}
        child={
          <>
            <GridWrapper
              gridColumns={8}
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
