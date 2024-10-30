import ItemsJson from '@/mocks/__mocks__/items.json';
import { renderWithBaseProviders, screen } from '@/testutils/testutils';
import ItemCard from '../ItemCard';

describe('Item Card test suite', () => {
  test('Item Card render', () => {
    renderWithBaseProviders(<ItemCard data={ItemsJson[0]} />);
    const itemName = screen.getByText(/Shovel/i);
    const itemDesc = screen.getByText(/Let you dig up/i);
    expect(itemName).toBeDefined();
    expect(itemDesc).toBeDefined();
  });
});
