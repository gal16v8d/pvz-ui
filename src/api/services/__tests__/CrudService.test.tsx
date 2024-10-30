import { get } from '../CrudService';
import { API_BASE_CONFIG, API_OBJECT } from '@/config/ApiBaseConfig';

describe('Crud service tests', () => {
  test('get call return success response', async () => {
    const minigameConfig = API_BASE_CONFIG.filter(
      (v) => v.name === API_OBJECT.MINIGAME
    )?.[0];
    const route = `http://localhost:7000/${minigameConfig.route}`;
    const result = await get(route, false);
    expect(result).toHaveLength(20);
  });
});
