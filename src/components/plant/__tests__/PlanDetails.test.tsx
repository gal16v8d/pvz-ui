import PlantDetails from '../PlantDetails';
import { PlantProvider } from '../PlantProvider';
import { PlantContext } from '../PlantContext';
import { renderWithBaseProviders, screen } from '@/testutils/testutils';
import PlantsJson from '@/mocks/__mocks__/plants.json';
import type { Plant } from '@/api/models';

describe('PlantDetails test suite', () => {
  type PlanDetailsParam = {
    data: unknown;
    matchText: string;
    matchCount: number;
  };

  test('PlanDetails does not render', () => {
    vi.mock('@/provider/PlantContext', () => ({
      usePlantContext: () => ({ plant: undefined }),
    }));
    const { container } = renderWithBaseProviders(
      <PlantProvider>
        <PlantDetails />
      </PlantProvider>
    );
    expect(container.firstChild).toBeNull();
  });

  it.each`
    data             | matchText        | matchCount
    ${PlantsJson[0]} | ${/Imitater/i}   | ${3}
    ${PlantsJson[1]} | ${/damage/i}     | ${1}
    ${PlantsJson[2]} | ${/production/i} | ${1}
    ${PlantsJson[3]} | ${/usage/i}      | ${1}
    ${PlantsJson[4]} | ${/toughness/i}  | ${1}
    ${PlantsJson[5]} | ${/range/i}      | ${1}
    ${PlantsJson[6]} | ${/effect/i}     | ${1}
    ${PlantsJson[7]} | ${/special/i}    | ${1}
    ${PlantsJson[8]} | ${/firing/i}     | ${1}
  `('PlanDetails should render - $args.data.name', (args: PlanDetailsParam) => {
    const mockSetPlant = vi.fn();
    const plant = args.data as unknown as Plant;
    const { container } = renderWithBaseProviders(
      <PlantContext.Provider value={{ setPlant: mockSetPlant, plant: plant }}>
        <PlantDetails />
      </PlantContext.Provider>
    );
    expect(container.firstChild).not.toBeNull();
    expect(screen.getAllByText(args.matchText)).toHaveLength(args.matchCount);
  });
});
