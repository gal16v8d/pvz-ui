import PuzzlesJson from '@/mocks/__mocks__/puzzles.json';
import { PvZProvider } from '@/provider/PvZProvider';
import { renderWithBaseProviders, screen } from '@/testutils/testutils';
import PuzzleCard from '../PuzzleCard';

test('Puzzle Card', () => {
  renderWithBaseProviders(
    <PvZProvider>
      <PuzzleCard data={PuzzlesJson[0]} />
    </PvZProvider>
  );
  const byText = screen.getAllByText(/Vasebreaker/i);
  expect(byText).toHaveLength(2);
});
