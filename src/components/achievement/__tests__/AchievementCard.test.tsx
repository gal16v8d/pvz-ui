import AchievementsJson from '@/mocks/__mocks__/achievements.json';
import { renderWithBaseProviders, screen } from '@/testutils/testutils';
import AchievementCard from '../AchievementCard';

describe('Achievement Card test suite', () => {
  test('Achievement Card render', () => {
    renderWithBaseProviders(<AchievementCard data={AchievementsJson[0]} />);
    const achievementName = screen.getByText(/Home Lawn Security/i);
    const achievementDesc = screen.getByText(/Complete adventure mode/i);
    expect(achievementName).toBeDefined();
    expect(achievementDesc).toBeDefined();
  });
});
