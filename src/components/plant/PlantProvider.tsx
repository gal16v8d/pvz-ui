import { Plant } from '@/api/models';
import React, { Dispatch, SetStateAction, useState } from 'react';

interface PlantContextProps {
  plant: Plant | undefined;
  setPlant: Dispatch<SetStateAction<Plant | undefined>>;
}

const PlantContext = React.createContext<PlantContextProps | undefined>(
  undefined
);

const PlantProvider = (
  props: React.PropsWithChildren<Record<string, unknown>>
): React.ReactElement => {
  const [plant, setPlant] = useState<Plant>();

  return (
    <PlantContext.Provider
      value={{
        plant,
        setPlant,
      }}
    >
      {props.children}
    </PlantContext.Provider>
  );
};

function usePlantContext(): PlantContextProps {
  const context = React.useContext(PlantContext);
  if (context === undefined) {
    throw new Error('PlantContext must be used within PlantProvider');
  }
  return context;
}

export { PlantProvider, usePlantContext };
