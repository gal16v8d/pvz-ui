import type { Zombie } from '@/api/models';
import type { PropsWithChildren, ReactElement } from 'react';
import { useState } from 'react';
import { ZombieContext } from './ZombieContext';

export const ZombieProvider = (
  props: PropsWithChildren<Record<string, unknown>>
): ReactElement => {
  const [zombie, setZombie] = useState<Zombie>();

  return (
    <ZombieContext.Provider
      value={{
        zombie,
        setZombie,
      }}
    >
      {props.children}
    </ZombieContext.Provider>
  );
};
