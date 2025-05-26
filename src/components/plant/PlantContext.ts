import type { Plant } from '@/api/models';
import type { Dispatch, SetStateAction } from 'react';
import { createContext, useContext } from 'react';

interface PlantContextProps {
  plant: Plant | undefined;
  setPlant: Dispatch<SetStateAction<Plant | undefined>>;
}

export const PlantContext = createContext<PlantContextProps | undefined>(
  undefined
);

export const usePlantContext = (): PlantContextProps => {
  const context = useContext(PlantContext);
  if (context === undefined) {
    throw new Error('PlantContext must be used within PlantProvider');
  }
  return context;
};
