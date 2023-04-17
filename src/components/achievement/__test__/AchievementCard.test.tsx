import AchievementsJson from '@/mocks/__mocks__/achievements.json';
import { PvZProvider } from '@/provider/PvZProvider';
import { renderWithBaseProviders, screen } from '@/testutils/testutils';
import AchievementCard from '../AchievementCard';

test('Achievement Card', () => {
  renderWithBaseProviders(
    <PvZProvider>
      <AchievementCard data={AchievementsJson[0]} />
    </PvZProvider>
  );
  const achievementName = screen.getByText(/Home Lawn Security/i);
  const achievementDesc = screen.getByText(/Complete adventure mode/i);
  expect(achievementName).toBeDefined();
  expect(achievementDesc).toBeDefined();
});
