import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { PvZProvider } from './provider/PvZProvider';
import PvZRouter from './router/PvZRouter';
import { ThemeProvider } from '@mui/material/styles';
import { baseTheme } from './constants/theme';
import type { FC, ReactElement } from 'react';

const App: FC = (): ReactElement => {
  console.log(`Running PVZ UI Version: ${import.meta.env.VITE_APP_VERSION}`);
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        // Api is not updated so often, so this can be Infinity
        // to avoid multiple fetch to Db, and avoid to consume a lot of
        // railway backend free tier
        gcTime: Infinity,
      },
    },
  });

  return (
    <div
      className="rootContainer"
      style={{ backgroundImage: `url(/assets/bg.png)` }}
    >
      <ThemeProvider theme={baseTheme}>
        <QueryClientProvider client={queryClient}>
          <PvZProvider>
            <PvZRouter />
          </PvZProvider>
          {import.meta.env.DEV && <ReactQueryDevtools initialIsOpen={false} />}
        </QueryClientProvider>
      </ThemeProvider>
    </div>
  );
};

export default App;
