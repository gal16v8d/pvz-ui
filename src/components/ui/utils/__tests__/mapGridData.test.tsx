import * as GridDataMapper from '../mapGridData';
import { API_OBJECT } from '@/config/ApiBaseConfig';
import { renderWithBaseProviders, screen } from '@/testutils/testutils';

const mockComponent = (name: string) => <div data-testid={name}>{name}</div>;

describe('GridDataMapper test suite', () => {
  type MapDataParam = {
    objectType: string;
    expectedTestId: string;
  };

  const initApiObject = (object: string) => ({
    name: object,
    expanded: false,
    queryKey: object,
    route: object,
    gridColumns: 1,
  });

  beforeAll(() => {
    // mocks for individual data grid mapping
    vi.mock('@/components/achievement/AchievementCard', () => ({
      default: () => mockComponent('AchievementCard'),
    }));

    vi.mock('@/components/garden/GardenCard', () => ({
      default: () => mockComponent('GardenCard'),
    }));

    vi.mock('@/components/item/ItemCard', () => ({
      default: () => mockComponent('ItemCard'),
    }));

    vi.mock('@/components/level/LevelCard', () => ({
      default: () => mockComponent('LevelCard'),
    }));

    vi.mock('@/components/minigame/MiniGameCard', () => ({
      default: () => mockComponent('MiniGameCard'),
    }));

    vi.mock('@/components/puzzle/PuzzleCard', () => ({
      default: () => mockComponent('PuzzleCard'),
    }));

    vi.mock('@/components/survival/SurvivalCard', () => ({
      default: () => mockComponent('SurvivalCard'),
    }));

    // mocks for list data grid mapping
    vi.mock('@/components/plant/PlantListing', () => ({
      default: () => mockComponent('PlantListing'),
    }));

    vi.mock('@/components/zombie/ZombieListing', () => ({
      default: () => mockComponent('ZombieListing'),
    }));
  });

  it.each`
    objectType                | expectedTestId
    ${API_OBJECT.ACHIEVEMENT} | ${'AchievementCard'}
    ${API_OBJECT.GARDEN}      | ${'GardenCard'}
    ${API_OBJECT.ITEM}        | ${'ItemCard'}
    ${API_OBJECT.LEVEL}       | ${'LevelCard'}
    ${API_OBJECT.MINIGAME}    | ${'MiniGameCard'}
    ${API_OBJECT.PUZZLE}      | ${'PuzzleCard'}
    ${API_OBJECT.SURVIVAL}    | ${'SurvivalCard'}
    ${null}                   | ${null}
    ${API_OBJECT.PLANT}       | ${null}
    ${API_OBJECT.ZOMBIE}      | ${null}
  `(
    'Should map individual data for objectType => $objectType',
    (args: MapDataParam) => {
      const { container } = renderWithBaseProviders(
        <>
          {GridDataMapper.mapIndividualData(
            initApiObject(args.objectType),
            'test'
          )}
        </>
      );
      if (args.expectedTestId) {
        expect(container.firstChild).not.toBeNull();
        const byTestId = screen.getByTestId(args.expectedTestId);
        expect(byTestId).toBeDefined();
      } else {
        expect(container.firstChild).toBeNull();
      }
    }
  );

  it.each`
    objectType                | expectedTestId
    ${API_OBJECT.PLANT}       | ${'PlantListing'}
    ${API_OBJECT.ZOMBIE}      | ${'ZombieListing'}
    ${null}                   | ${null}
    ${API_OBJECT.ACHIEVEMENT} | ${null}
    ${API_OBJECT.GARDEN}      | ${null}
    ${API_OBJECT.ITEM}        | ${null}
    ${API_OBJECT.LEVEL}       | ${null}
    ${API_OBJECT.MINIGAME}    | ${null}
    ${API_OBJECT.PUZZLE}      | ${null}
    ${API_OBJECT.SURVIVAL}    | ${null}
  `(
    'Should map list data for objectType => $objectType',
    (args: MapDataParam) => {
      const { container } = renderWithBaseProviders(
        <>
          {GridDataMapper.mapListData(initApiObject(args.objectType), ['test'])}
        </>
      );
      if (args.expectedTestId) {
        expect(container.firstChild).not.toBeNull();
        const byTestId = screen.getByTestId(args.expectedTestId);
        expect(byTestId).toBeDefined();
      } else {
        expect(container.firstChild).toBeNull();
      }
    }
  );
});
