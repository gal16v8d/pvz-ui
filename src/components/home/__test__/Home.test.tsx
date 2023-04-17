import { PvZProvider } from '@/provider/PvZProvider';
import { renderWithBaseProviders, screen } from '@/testutils/testutils';
import Home from '../Home';

test('Home', () => {
  renderWithBaseProviders(
    <PvZProvider>
      <Home />
    </PvZProvider>
  );
  const homeText = screen.getByText(/upper-left corner menu/i);
  expect(homeText).toBeDefined();
});
