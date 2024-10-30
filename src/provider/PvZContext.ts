import { TFunction } from 'i18next';
import React from 'react';

interface PvZContextProps {
  t: TFunction<'translation', undefined>;
}

export const PvZContext = React.createContext<PvZContextProps | undefined>(undefined);

export const usePvZContext = (): PvZContextProps => {
  const context = React.useContext(PvZContext);
  if (context === undefined) {
    throw new Error('PvZContext must be used within PvZProvider');
  }
  return context;
};
