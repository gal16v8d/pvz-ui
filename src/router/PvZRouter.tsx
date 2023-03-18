import { CircularProgress } from '@mui/material';
import { Suspense } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from '../components/home/Home';
import PageFooter from '../components/ui/layout/PageFooter';
import PageHeader from '../components/ui/layout/PageHeader';
import Listing from '../components/ui/Listing';
import PvZMenu from '../components/ui/PvZMenu';
import { API_BASE_CONFIG } from '../config/ApiBaseConfig';

const PvZRouter = (): JSX.Element => {
  return (
    <>
      <PageHeader />
      <Suspense fallback={<CircularProgress color="inherit" />}>
        <BrowserRouter>
          <PvZMenu />
          <Routes>
            <Route path={'/'} element={<Home />} />
            {API_BASE_CONFIG.map((config) => (
              <Route
                key={`route-${config.name}`}
                path={config.route}
                element={<Listing apiObject={config} />}
              />
            ))}
          </Routes>
        </BrowserRouter>
      </Suspense>
      <PageFooter />
    </>
  );
};

export default PvZRouter;
