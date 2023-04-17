import { TEST_ID } from '@/constants/testid';
import ZombiesJson from '@/mocks/__mocks__/zombies.json';
import { PvZProvider } from '@/provider/PvZProvider';
import { renderWithBaseProviders, screen } from '@/testutils/testutils';
import ZombieCard from '../ZombieCard';
import { ZombieProvider } from '../ZombieProvider';

test('PlantCard Card', () => {
  const data = ZombiesJson[0];
  renderWithBaseProviders(
    <PvZProvider>
      <ZombieProvider>
        <ZombieCard data={data} />
      </ZombieProvider>
    </PvZProvider>
  );
  const testId = screen.getByTestId(`${TEST_ID.ZombieCard}-${data._id}`);
  expect(testId).toBeDefined();
});
