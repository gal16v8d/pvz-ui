import GardensJson from '@/mocks/__mocks__/gardens.json';
import { renderWithBaseProviders, screen } from '@/testutils/testutils';
import GardenCard from '../GardenCard';

describe('Garden Card test suite', () => {
  test('Garden Card render', () => {
    renderWithBaseProviders(<GardenCard data={GardensJson[0]} />);
    const gardenName = screen.getByText(/Day Garden/i);
    const gardenPlants = screen.getByText(/32/i);
    const gardenHelper = screen.getByText(/Helper/i);
    expect(gardenName).toBeDefined();
    expect(gardenPlants).toBeDefined();
    expect(gardenHelper).toBeDefined();
  });
});
