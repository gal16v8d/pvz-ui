import type { ApiConfig } from '@/api/config/ApiConfig';

export const API_OBJECT = {
  ACHIEVEMENT: 'achievement',
  GARDEN: 'garden',
  ITEM: 'item',
  LEVEL: 'level',
  MINIGAME: 'minigame',
  PLANT: 'plant',
  PUZZLE: 'puzzle',
  SURVIVAL: 'survival',
  ZOMBIE: 'zombie',
};

export const ROW_OPTIONS = [10, 20, 50, 100];

const EXTEND_GRID_COL = 1;
const DEFAULT_GRID_COL = 2;
const BIG_GRID_COL = 5;

const resolveGridColumns = (config: string): number => {
  switch (config) {
    case API_OBJECT.MINIGAME:
      return BIG_GRID_COL;
    case API_OBJECT.PLANT:
      return EXTEND_GRID_COL;
    case API_OBJECT.PUZZLE:
      return BIG_GRID_COL;
    case API_OBJECT.SURVIVAL:
      return BIG_GRID_COL;
    case API_OBJECT.ZOMBIE:
      return EXTEND_GRID_COL;
    default:
      return DEFAULT_GRID_COL;
  }
};

export const API_BASE_CONFIG: ApiConfig[] = Object.values(API_OBJECT).map(
  (config) => ({
    name: config,
    expanded: config === 'zombie',
    queryKey: `${config}s`,
    route: `${config}s`,
    gridColumns: resolveGridColumns(config),
  })
);
