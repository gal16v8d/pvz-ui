import ApiError from '@/api/responses/ApiError';
import Listing from '../Listing';
import { UseQueryResult } from '@tanstack/react-query';
import { renderWithBaseProviders, screen } from '@/testutils/testutils';
import { API_OBJECT } from '@/config/ApiBaseConfig';
import { TEST_ID } from '@/constants/testid';
import { useGet } from '@/api/services/hooks/useGenericService';
import AchievementsJson from '@/mocks/__mocks__/achievements.json';
import ZombiesJson from '@/mocks/__mocks__/zombies.json';

const mockComponent = (name: string) => <div data-testid={name}>{name}</div>;

describe('Listing test suite', () => {
  const initApiObject = (object: string) => ({
    name: object,
    expanded: false,
    queryKey: object,
    route: object,
    gridColumns: 1,
  });

  beforeAll(() => {
    vi.mock('@/api/services/hooks/useGenericService', () => ({
      useGet: vi.fn(),
    }));
    vi.mock('@/components/achievement/AchievementCard', () => ({
      default: () => mockComponent('AchievementCard'),
    }));
    vi.mock('@/components/zombie/ZombieListing', () => ({
      default: () => mockComponent('ZombieListing'),
    }));
  });

  test('Should not render while no data', () => {
    const mockResult: Partial<UseQueryResult<unknown[], ApiError>> = {
      data: undefined,
      error: null,
    };
    (useGet as ReturnType<typeof vi.fn>).mockReturnValue(mockResult);
    renderWithBaseProviders(
      <Listing apiObject={initApiObject(API_OBJECT.ACHIEVEMENT)}></Listing>
    );
    const byTestId = screen.getByTestId(TEST_ID.CircularProgress);
    expect(byTestId).toBeDefined();
  });

  test('Should render when it has data (individual)', () => {
    const mockResult: Partial<UseQueryResult<unknown[], ApiError>> = {
      data: AchievementsJson,
      error: null,
    };
    (useGet as ReturnType<typeof vi.fn>).mockReturnValue(mockResult);
    renderWithBaseProviders(
      <Listing apiObject={initApiObject(API_OBJECT.ACHIEVEMENT)}></Listing>
    );
    const byTestId = screen.getByTestId(
      `gridWrapper-list-${API_OBJECT.ACHIEVEMENT}`
    );
    const achievementId = screen.findAllByTestId('AchievementCard');
    expect(byTestId).toBeDefined();
    expect(achievementId).toBeDefined();
  });

  test('Should render when it has data (list)', () => {
    const mockResult: Partial<UseQueryResult<unknown[], ApiError>> = {
      data: ZombiesJson,
      error: null,
    };
    (useGet as ReturnType<typeof vi.fn>).mockReturnValue(mockResult);
    renderWithBaseProviders(
      <Listing apiObject={initApiObject(API_OBJECT.ZOMBIE)}></Listing>
    );
    const byTestId = screen.getByTestId(
      `gridWrapper-list-${API_OBJECT.ZOMBIE}`
    );
    const zombieListId = screen.getByTestId('ZombieListing');
    expect(byTestId).toBeDefined();
    expect(zombieListId).toBeDefined();
  });
});
