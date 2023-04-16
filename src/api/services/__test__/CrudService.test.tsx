import { get } from '../CrudService';
import { API_BASE_CONFIG, API_OBJECT } from '@/config/ApiBaseConfig';

describe('Crud service tests', () => {
  // temp skip per MSW + VIte config errors
  it.skip('get success', async () => {
    const minigameConfig = API_BASE_CONFIG.filter(
      (v) => v.name === API_OBJECT.MINIGAME
    )?.[0];
    const result = await get(
      `http://localhost:7000${minigameConfig.route}`,
      false
    );
    expect(result).toHaveLength(10);
  });
});
