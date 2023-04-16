import { renderWithBaseProviders, screen } from '@/testutils/testutils';
import { PvZProvider } from '@/provider/PvZProvider';
import PageFooter from '../PageFooter';

test('renders layout footer app', () => {
  renderWithBaseProviders(
    <PvZProvider>
      <PageFooter />
    </PvZProvider>
  );
  const footerAppName = screen.getByText(/PvZ-Api/i);
  const footerMit = screen.getByText(/MIT/i);
  expect(footerAppName).toBeTruthy();
  expect(footerMit).toBeTruthy();
});
