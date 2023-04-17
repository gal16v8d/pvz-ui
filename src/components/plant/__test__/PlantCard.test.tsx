import { TEST_ID } from '@/constants/testid';
import PlantsJson from '@/mocks/__mocks__/plants.json';
import { PvZProvider } from '@/provider/PvZProvider';
import { renderWithBaseProviders, screen } from '@/testutils/testutils';
import PlantCard from '../PlantCard';
import { PlantProvider } from '../PlantProvider';

test('PlantCard Card', () => {
  const data = PlantsJson[0];
  renderWithBaseProviders(
    <PvZProvider>
      <PlantProvider>
        <PlantCard data={data} />
      </PlantProvider>
    </PvZProvider>
  );
  const testId = screen.getByTestId(`${TEST_ID.PlantCard}-${data._id}`);
  expect(testId).toBeDefined();
});
