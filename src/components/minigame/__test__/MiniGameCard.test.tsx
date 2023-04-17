import MiniGamesJson from '@/mocks/__mocks__/minigames.json';
import { PvZProvider } from '@/provider/PvZProvider';
import { renderWithBaseProviders, screen } from '@/testutils/testutils';
import MiniGameCard from '../MiniGameCard';

test('MiniGame Card', () => {
  renderWithBaseProviders(
    <PvZProvider>
      <MiniGameCard data={MiniGamesJson[0]} />
    </PvZProvider>
  );
  const minigameName = screen.getByText(/ZomBotany/i);
  expect(minigameName).toBeDefined();
});
