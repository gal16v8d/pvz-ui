import { usePvZContext } from '@/provider/PvZContext';
import './PageFooter.css';

const PageFooter = (): React.ReactElement => {
  const { t } = usePvZContext();
  return (
    <footer className="footer">
      <p className="footer__text">
        {t('header.title')} {t('footer.by')}{' '}
        <a href="https://github.com/gal16v8d">gal16v8d</a>.{' '}
        {t('footer.licence')}{' '}
        <a href="https://opensource.org/licenses/mit-license.php">MIT</a>.
        &copy; PvZ-Api, {new Date().getFullYear()}.
      </p>
    </footer>
  );
};

export default PageFooter;
