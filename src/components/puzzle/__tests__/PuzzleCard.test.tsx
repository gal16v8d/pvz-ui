import PuzzlesJson from '@/mocks/__mocks__/puzzles.json';
import { renderWithBaseProviders, screen } from '@/testutils/testutils';
import PuzzleCard from '../PuzzleCard';

describe('Puzzle Card test suite', () => {
  type PuzzleTestParam = {
    data: unknown;
    expectedText: string;
  };

  it.each`
    data               | expectedText
    ${PuzzlesJson[0]}  | ${/Vasebreaker/i}
    ${PuzzlesJson[10]} | ${/I, Zombie/i}
  `('Puzzle Card render - $expectedText', (args: PuzzleTestParam) => {
    renderWithBaseProviders(<PuzzleCard data={args.data} />);
    const byText = screen.getAllByText(args.expectedText);
    expect(byText).toHaveLength(2);
  });
});
