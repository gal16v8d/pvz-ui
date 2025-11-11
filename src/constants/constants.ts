export const ARR_JOINER = ', ';
export const DATA_ANCHOR = 'right';
export const ACHIEVEMENT_IMAGES = import.meta.glob<{ default: string }>(
    '@/assets/achievements/*.png',
    {
      eager: true,
    }
);
export const GARDEN_IMAGES = import.meta.glob<{ default: string }>(
  '@/assets/gardens/*.png',
  {
    eager: true,
  }
);
export const MINIGAME_IMAGES = import.meta.glob<{ default: string }>(
    '@/assets/minigames/*.png',
    {
      eager: true,
    }
  );
export const PLANT_IMAGES = import.meta.glob<{ default: string }>(
    '@/assets/plants/*.png',
    {
      eager: true,
    }
  );
export const PUZZLE_IMAGES = import.meta.glob<{ default: string }>(
  '@/assets/puzzles/*.png',
  {
    eager: true,
  }
);
export const SURVIVAL_IMAGES = import.meta.glob<{ default: string }>(
    '@/assets/survivals/*.png',
    {
      eager: true,
    }
  );
export const ZOMBIE_IMAGES = import.meta.glob<{ default: string }>(
    '@/assets/zombies/*.png',
    {
      eager: true,
    }
  );
