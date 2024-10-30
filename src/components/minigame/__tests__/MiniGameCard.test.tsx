import MiniGamesJson from '@/mocks/__mocks__/minigames.json';
import { renderWithBaseProviders, screen } from '@/testutils/testutils';
import MiniGameCard from '../MiniGameCard';

describe('MiniGame Card test suite', () => {
  test('MiniGame Card render', () => {
    renderWithBaseProviders(<MiniGameCard data={MiniGamesJson[0]} />);
    const minigameName = screen.getByText(/ZomBotany/i);
    expect(minigameName).toBeDefined();
  });
});
