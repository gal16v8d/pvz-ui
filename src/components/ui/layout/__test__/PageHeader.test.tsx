import { renderWithBaseProviders, screen } from '@/testutils/testutils';
import { PvZProvider } from '@/provider/PvZProvider';
import PageHeader from '../PageHeader';

test('renders layout footer app', () => {
  renderWithBaseProviders(
    <PvZProvider>
      <PageHeader />
    </PvZProvider>
  );
  const headerAppTitle = screen.getByText(/Plants Vs Zombies - Wiki/i);
  expect(headerAppTitle).toBeTruthy();
});
