import ItemsJson from '@/mocks/__mocks__/items.json';
import { PvZProvider } from '@/provider/PvZProvider';
import { renderWithBaseProviders, screen } from '@/testutils/testutils';
import ItemCard from '../ItemCard';

test('Item Card', () => {
  renderWithBaseProviders(
    <PvZProvider>
      <ItemCard data={ItemsJson[0]} />
    </PvZProvider>
  );
  const itemName = screen.getByText(/Shovel/i);
  const itemDesc = screen.getByText(/Let you dig up/i);
  expect(itemName).toBeDefined();
  expect(itemDesc).toBeDefined();
});
