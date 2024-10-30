import { Plant } from '@/api/models';
import React, { Dispatch, SetStateAction } from 'react';

interface PlantContextProps {
  plant: Plant | undefined;
  setPlant: Dispatch<SetStateAction<Plant | undefined>>;
}

export const PlantContext = React.createContext<PlantContextProps | undefined>(
  undefined
);

export const usePlantContext = (): PlantContextProps => {
  const context = React.useContext(PlantContext);
  if (context === undefined) {
    throw new Error('PlantContext must be used within PlantProvider');
  }
  return context;
};
