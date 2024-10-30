import * as ValueMapper from '../valueMapping';
import { renderWithBaseProviders, screen } from '@/testutils/testutils';
import { cardThemePlantSx } from '@/constants/theme';

describe('ValueMapper test suite', () => {
  it.each`
    data
    ${undefined}
    ${null}
    ${false}
    ${''}
    ${0}
  `('Should not map value since no data is provided - $data', ({ data }) => {
    const { container } = renderWithBaseProviders(
      <>
        {ValueMapper.keyValueText(data, 'myArg', {
          key: cardThemePlantSx.key,
          value: cardThemePlantSx.value,
        })}
      </>
    );
    expect(container.firstChild).toBeNull();
  });

  test('Should map value', () => {
    const { container } = renderWithBaseProviders(
      <>
        {ValueMapper.keyValueText('Test', 'myArg', {
          key: cardThemePlantSx.key,
          value: cardThemePlantSx.value,
        })}
      </>
    );
    expect(container.firstChild).not.toBeNull();
    const byTestId = screen.getByTestId('myArg-data');
    expect(byTestId).toBeDefined();
  });
});
