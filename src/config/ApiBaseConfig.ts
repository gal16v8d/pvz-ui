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

const GRID_COLUMN_OPTIONS: Record<string, number> = {
  [API_OBJECT.MINIGAME]: BIG_GRID_COL,
  [API_OBJECT.PLANT]: EXTEND_GRID_COL,
  [API_OBJECT.PUZZLE]: BIG_GRID_COL,
  [API_OBJECT.SURVIVAL]: BIG_GRID_COL,
  [API_OBJECT.ZOMBIE]: EXTEND_GRID_COL,
};

const resolveGridColumns = (config: string): number => GRID_COLUMN_OPTIONS[config] ?? DEFAULT_GRID_COL;

export const API_BASE_CONFIG: Array<ApiConfig> = Object.values(API_OBJECT).map(
  (config) => ({
    name: config,
    expanded: config === 'zombie',
    queryKey: `${config}s`,
    route: `${config}s`,
    gridColumns: resolveGridColumns(config),
  })
);
