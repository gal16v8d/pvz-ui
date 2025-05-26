import type { Plant } from '@/api/models';
import type { PropsWithChildren, ReactElement } from 'react';
import { useState } from 'react';
import { PlantContext } from './PlantContext';

export const PlantProvider = (
  props: PropsWithChildren<Record<string, unknown>>
): ReactElement => {
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
