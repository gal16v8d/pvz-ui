import ApiConfig from '@/api/config/ApiConfig';
import AchievementCard from '@/components/achievement/AchievementCard';
import GardenCard from '@/components/garden/GardenCard';
import ItemCard from '@/components/item/ItemCard';
import LevelCard from '@/components/level/LevelCard';
import MiniGameCard from '@/components/minigame/MiniGameCard';
import PlantListing from '@/components/plant/PlantListing';
import PuzzleCard from '@/components/puzzle/PuzzleCard';
import SurvivalCard from '@/components/survival/SurvivalCard';
import ZombieListing from '@/components/zombie/ZombieListing';
import { API_OBJECT } from '@/config/ApiBaseConfig';
import DataId from '@/types/DataId';

export const mapIndividualData = (
  apiObject: ApiConfig,
  data: unknown
): React.ReactNode | null => {
  const key = (data as DataId)._id;

  switch (apiObject.name) {
    case API_OBJECT.ACHIEVEMENT:
      return <AchievementCard key={key} data={data} />;
    case API_OBJECT.GARDEN:
      return <GardenCard key={key} data={data} />;
    case API_OBJECT.ITEM:
      return <ItemCard key={key} data={data} />;
    case API_OBJECT.LEVEL:
      return <LevelCard key={key} data={data} />;
    case API_OBJECT.MINIGAME:
      return <MiniGameCard key={key} data={data} />;
    case API_OBJECT.PUZZLE:
      return <PuzzleCard key={key} data={data} />;
    case API_OBJECT.SURVIVAL:
      return <SurvivalCard key={key} data={data} />;
    default:
      return null;
  }
};

export const mapListData = (
  apiObject: ApiConfig,
  data: unknown[]
): React.ReactNode | null => {
  switch (apiObject.name) {
    case API_OBJECT.PLANT:
      return <PlantListing data={data} />;
    case API_OBJECT.ZOMBIE:
      return <ZombieListing data={data} />;
    default:
      return null;
  }
};
