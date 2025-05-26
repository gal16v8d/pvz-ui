import type { Zombie } from '@/api/models';
import type {
    Dispatch,
    SetStateAction,
  } from 'react';
  import { createContext, useContext } from 'react';

interface ZombieContextProps {
  zombie: Zombie | undefined;
  setZombie: Dispatch<SetStateAction<Zombie | undefined>>;
}

export const ZombieContext = createContext<ZombieContextProps | undefined>(undefined);

export const useZombieContext = (): ZombieContextProps => {
  const context = useContext(ZombieContext);
  if (context === undefined) {
    throw new Error('ZombieContext must be used within ZombieProvider');
  }
  return context;
};