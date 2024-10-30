import { renderWithBaseProviders, screen } from '@/testutils/testutils';
import Home from '../Home';

describe('Home test suite', () => {
  test('Home render', () => {
    renderWithBaseProviders(<Home />);
    const homeText = screen.getByText(/upper-left corner menu/i);
    expect(homeText).toBeDefined();
  });
});
