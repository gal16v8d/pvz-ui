import { Zombie } from '@/api/models';
import React, { Dispatch, SetStateAction, useState } from 'react';

interface ZombieContextProps {
  zombie: Zombie | undefined;
  setZombie: Dispatch<SetStateAction<Zombie | undefined>>;
}

const ZombieContext = React.createContext<ZombieContextProps | undefined>(
  undefined
);

const ZombieProvider = (
  props: React.PropsWithChildren<Record<string, unknown>>
): React.ReactElement => {
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

function useZombieContext(): ZombieContextProps {
  const context = React.useContext(ZombieContext);
  if (context === undefined) {
    throw new Error('ZombieContext must be used within ZombieProvider');
  }
  return context;
}

export { ZombieProvider, useZombieContext };
