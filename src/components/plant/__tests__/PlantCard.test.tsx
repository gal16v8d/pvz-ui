import { TEST_ID } from '@/constants/testid';
import PlantsJson from '@/mocks/__mocks__/plants.json';
import { renderWithBaseProviders, screen } from '@/testutils/testutils';
import PlantCard from '../PlantCard';
import { PlantContext } from '../PlantContext';
import { PlantProvider } from '../PlantProvider';
import userEvent from '@testing-library/user-event';

describe('PlantCard test suite', () => {
  test('PlantCard render', () => {
    const data = PlantsJson[0];
    renderWithBaseProviders(
      <PlantProvider>
        <PlantCard data={data} />
      </PlantProvider>
    );
    const testId = screen.getByTestId(`${TEST_ID.PlantCard}-${data._id}`);
    expect(testId).toBeDefined();
  });

  it('should call setPlant when the card is clicked', async () => {
    const mockSetPlant = vi.fn();
    const data = PlantsJson[0];
    renderWithBaseProviders(
      <PlantContext.Provider
        value={{ setPlant: mockSetPlant, plant: undefined }}
      >
        <PlantCard data={data} />
      </PlantContext.Provider>
    );
    const cardMedia = screen.getByTestId(`${TEST_ID.PlantCard}-${data._id}`);
    await userEvent.click(cardMedia);
    expect(mockSetPlant).toHaveBeenCalledWith(data);
  });
});
