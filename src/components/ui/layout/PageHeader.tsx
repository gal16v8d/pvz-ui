import { usePvZContext } from '@/provider/PvZContext';
import type { ReactElement } from 'react';
import './PageHeader.css';

const PageHeader = (): ReactElement => {
  const { t } = usePvZContext();
  return (
    <header className="header">
      <h1 className="title">{t('header.title')}</h1>
    </header>
  );
};

export default PageHeader;
