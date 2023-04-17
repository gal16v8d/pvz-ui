import SurvivalsJson from '@/mocks/__mocks__/survivals.json';
import { PvZProvider } from '@/provider/PvZProvider';
import { renderWithBaseProviders, screen } from '@/testutils/testutils';
import SurvivalCard from '../SurvivalCard';

describe('Survival Card', () => {
  test('Survival Card with Flags', () => {
    renderWithBaseProviders(
      <PvZProvider>
        <SurvivalCard data={SurvivalsJson[0]} />
      </PvZProvider>
    );
    const name = screen.getByText(/Survival: Day/i);
    const flags = screen.getByText(/5/i);
    expect(name).toBeDefined();
    expect(flags).toBeDefined();
  });

  test('Survival Card Endless', () => {
    renderWithBaseProviders(
      <PvZProvider>
        <SurvivalCard data={SurvivalsJson[10]} />
      </PvZProvider>
    );
    const name = screen.getByText(/Survival: Endless/i);
    const endless = screen.getAllByText(/Endless/i);
    expect(name).toBeDefined();
    expect(endless).toHaveLength(2);
  });
});
