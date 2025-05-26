import type { PropsWithChildren, ReactElement } from 'react';
import { useTranslation } from 'react-i18next';
import { PvZContext } from './PvZContext';

export const PvZProvider = (
  props: PropsWithChildren<Record<string, unknown>>
): ReactElement => {
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
