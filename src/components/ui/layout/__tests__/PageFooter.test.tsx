import { renderWithBaseProviders, screen } from '@/testutils/testutils';
import PageFooter from '../PageFooter';

describe('Layout footer', () => {
  test('renders layout footer app', () => {
    renderWithBaseProviders(<PageFooter />);
    const footerAppName = screen.getByText(/PvZ-Api/i);
    const footerMit = screen.getByText(/MIT/i);
    expect(footerAppName).toBeDefined();
    expect(footerMit).toBeDefined();
  });
});
