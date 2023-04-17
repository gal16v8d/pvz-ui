import { PvZProvider } from '@/provider/PvZProvider';
import { renderWithBaseProviders, screen } from '@/testutils/testutils';
import PageHeader from '../PageHeader';

test('renders layout footer app', () => {
  renderWithBaseProviders(
    <PvZProvider>
      <PageHeader />
    </PvZProvider>
  );
  const headerAppTitle = screen.getByText(/Plants Vs Zombies - Wiki/i);
  expect(headerAppTitle).toBeDefined();
});
