import { usePvZContext } from '../../../provider/PvZProvider';
import './PageHeader.css';

const PageHeader = (): JSX.Element => {
  const { t } = usePvZContext();
  return (
    <header className="header">
      <h1 className="title">{t('header.title')}</h1>
    </header>
  );
};

export default PageHeader;
