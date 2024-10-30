import { renderWithBaseProviders, screen } from '@/testutils/testutils';
import PageHeader from '../PageHeader';

describe('Layout header', () => {
  test('renders layout header app', () => {
    renderWithBaseProviders(<PageHeader />);
    const headerAppTitle = screen.getByText(/Plants Vs Zombies - Wiki/i);
    expect(headerAppTitle).toBeDefined();
  });
});
