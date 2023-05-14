import { TFunction } from 'i18next';
import React from 'react';
import { useTranslation } from 'react-i18next';

interface PvZContextProps {
  t: TFunction<'translation', undefined>;
}

const PvZContext = React.createContext<PvZContextProps | undefined>(undefined);

const PvZProvider = (
  props: React.PropsWithChildren<Record<string, unknown>>
): React.ReactElement => {
  const { t } = useTranslation();

  return (
    <PvZContext.Provider
      value={{
        t,
      }}
    >
      {props.children}
    </PvZContext.Provider>
  );
};

function usePvZContext(): PvZContextProps {
  const context = React.useContext(PvZContext);
  if (context === undefined) {
    throw new Error('PvZContext must be used within PvZProvider');
  }
  return context;
}

export { PvZProvider, usePvZContext };
