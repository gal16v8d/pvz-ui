import { FC } from 'react';
import GridWrapper from '../ui/GridWrapper';
import PlantCard from './PlantCard';
import PlantDetails from './PlantDetails';
import { PlantProvider } from './PlantProvider';
import { Plant } from '../../api/models';

interface PlantListingProps {
  data: unknown[];
}

const PlantListing: FC<PlantListingProps> = ({ data }): JSX.Element => {
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
                    <PlantCard data={d} />
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
