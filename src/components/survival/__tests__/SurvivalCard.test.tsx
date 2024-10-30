import SurvivalsJson from '@/mocks/__mocks__/survivals.json';
import { renderWithBaseProviders, screen } from '@/testutils/testutils';
import SurvivalCard from '../SurvivalCard';

describe('Survival Card test suite', () => {
  type SurvivalTestParam = {
    data: unknown;
    expectedName: string;
    haveFlag: boolean;
    expectedValue: string;
  };

  it.each`
    data                 | expectedName            | haveFlag | expectedValue
    ${SurvivalsJson[0]}  | ${/Survival: Day/i}     | ${true}  | ${/5/i}
    ${SurvivalsJson[10]} | ${/Survival: Endless/i} | ${false} | ${/Endless/i}
  `('Survival Card for $expectedName', (args: SurvivalTestParam) => {
    renderWithBaseProviders(<SurvivalCard data={args.data} />);
    const name = screen.getByText(args.expectedName);
    if (args.haveFlag) {
      const flag = screen.getByText(args.expectedValue);
      expect(flag).toBeDefined();
    } else {
      const endless = screen.getAllByText(args.expectedValue);
      expect(endless).toHaveLength(2);
    }
    expect(name).toBeDefined();
  });
});
