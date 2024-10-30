import React from 'react';
import { useTranslation } from 'react-i18next';
import { PvZContext } from './PvZContext';

export const PvZProvider = (
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
