import GardensJson from '@/mocks/__mocks__/gardens.json';
import { PvZProvider } from '@/provider/PvZProvider';
import { renderWithBaseProviders, screen } from '@/testutils/testutils';
import GardenCard from '../GardenCard';

test('Garden Card', () => {
  renderWithBaseProviders(
    <PvZProvider>
      <GardenCard data={GardensJson[0]} />
    </PvZProvider>
  );
  const gardenName = screen.getByText(/Day Garden/i);
  const gardenPlants = screen.getByText(/32/i);
  const gardenHelper = screen.getByText(/Helper/i);
  expect(gardenName).toBeDefined();
  expect(gardenPlants).toBeDefined();
  expect(gardenHelper).toBeDefined();
});
