import type { Plant } from '@/api/models';
import React, { useState } from 'react';
import { PlantContext } from './PlantContext';

export const PlantProvider = (
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
