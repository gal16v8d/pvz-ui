import type { TFunction } from 'i18next';
import { createContext, useContext } from 'react';

interface PvZContextProps {
  t: TFunction<'translation', undefined>;
}

export const PvZContext = createContext<PvZContextProps | undefined>(undefined);

export const usePvZContext = (): PvZContextProps => {
  const context = useContext(PvZContext);
  if (context === undefined) {
    throw new Error('PvZContext must be used within PvZProvider');
  }
  return context;
};
